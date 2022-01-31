import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Pessoa from '../entities/Pessoa';
import PessoaRepository from '../repositories/PessoaRepository';

interface Request {
    cpf: string;
    tipo_pessoa:string;
  email: string;
  sexo: string;
  nome: string;
  nascimento: string;
  pis: string;
  end_bairro: string;
  end_cep: string;
  end_cidade: string;
  end_logradouro: string;
  end_numero: string;
  end_uf:string;
  escolaridade_id:number,
  cargo_id: number
}
class CreatePessoaService {
  public async execute({ cpf,tipo_pessoa,cargo_id,email,sexo,nome,nascimento,pis,end_bairro,end_cep,end_cidade,end_logradouro,end_numero,end_uf,escolaridade_id}: Request): Promise<Pessoa> {
    const pessoaRepo = getCustomRepository(PessoaRepository);
    const checkCpf = await pessoaRepo.findCpf(cpf);
    if (checkCpf) {
      throw new AppError('Erro, pessoa já está cadastrada');
    }
    const pessoa = pessoaRepo.create({ 
        cpf,
        tipo_pessoa,
        email,
        sexo,
        nome,
        nascimento,
        pis,
        end_bairro,
        end_cep,
        end_cidade,
        end_logradouro,
        end_numero,
        end_uf,
        escolaridade_id,
        cargo_id
    });
    await pessoaRepo.save(pessoa);
    return pessoa;
  }
}

export default CreatePessoaService;
