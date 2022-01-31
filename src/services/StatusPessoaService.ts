import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Pessoa from '../entities/Pessoa';
import PessoaRepository from '../repositories/PessoaRepository';

interface Request {
    id: string;
}
class StatusPessoaService {
  public async execute({ id }: Request): Promise<Pessoa> {
    const pessoaRepo = getCustomRepository(PessoaRepository);
    let checkPearson = await pessoaRepo.findOne({ where:{id}});
    if (!checkPearson) {
      throw new AppError('Erro, Pessoa não cadastrada');
    }
    checkPearson.status = checkPearson.status === 1 ? 0 : 1
    pessoaRepo.save(checkPearson)
    return checkPearson
  }
}

export default StatusPessoaService;
