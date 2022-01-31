import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Pessoa from '../entities/Pessoa';
import PessoaRepository from '../repositories/PessoaRepository';

interface Request {
    id: string;
    tipo_pessoa:string;
    email: string;
    sexo: string;
    nome: string;
    nascimento: Date;
    pis: string;
    end_bairro: string;
    end_cep: string;
    end_cidade: string;
    end_logradouro: string;
    end_numero: string;
    end_uf:string;
    escolaridade_id: number,
    cargo_id: number
}
class UpdatePessoaService {
  public async execute({ id, tipo_pessoa,cargo_id,email,escolaridade_id,sexo,nome,nascimento,pis,end_bairro,end_cep,end_cidade,end_logradouro,end_numero,end_uf}: Request): Promise<Pessoa> {
    const pessoaRepo = getCustomRepository(PessoaRepository);
    let checkPearson = await pessoaRepo.findOne({ where:{id}});
    if (!checkPearson) {
      throw new AppError('Erro, Pessoa não cadastrada');
    }else{
        checkPearson = {
            ...checkPearson,
            tipo_pessoa,email,sexo,nome,nascimento,pis,end_bairro,end_cep,end_cidade,end_logradouro,end_numero,end_uf,escolaridade_id,cargo_id
        }
        await pessoaRepo.save(checkPearson);
        return checkPearson;
    }
  }
}

export default UpdatePessoaService;
