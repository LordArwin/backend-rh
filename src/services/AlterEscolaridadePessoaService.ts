import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Pessoa from '../entities/Pessoa';
import PessoaRepository from '../repositories/PessoaRepository';
import EscolaridadeRepository from '../repositories/EscolaridadeRepository';

interface Request {
    id: string;
    escolaridade_id: string;
}
class AlterEscolaridadePessoaService {
  public async execute({ id, escolaridade_id }: Request): Promise<Pessoa> {
    const pessoaRepo = getCustomRepository(PessoaRepository);
    let checkPearson = await pessoaRepo.findOne({ where:{id}});
    const escolaridadeRepo = getCustomRepository(EscolaridadeRepository);
    let checkEscolaridade = await escolaridadeRepo.findOne({ where:{escolaridade_id}});
    if (!checkPearson) {
      throw new AppError('Erro, Pessoa não está cadastrada');
    }
    else if(!checkEscolaridade){
        throw new AppError('Erro, Escolaridade não está cadastrada');
    }
    checkPearson.escolaridade_id = parseInt(escolaridade_id)
    pessoaRepo.save(checkPearson)
    return checkPearson
  }
}

export default AlterEscolaridadePessoaService;
