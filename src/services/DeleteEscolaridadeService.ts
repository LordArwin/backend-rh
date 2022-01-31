import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import EscolaridadeRepository from '../repositories/EscolaridadeRepository';

interface Request {
    escolaridade_id: string;
}
class DeleteEscolaridadeService {
  public async execute({ escolaridade_id }: Request): Promise<string> {
    const escolaridadeRepo = getCustomRepository(EscolaridadeRepository);
    let checkEscolaridade = await escolaridadeRepo.findOne({where:{escolaridade_id}});
    if (!checkEscolaridade) {
      throw new AppError('Erro, escolaridade não cadastrada');
    }
    escolaridadeRepo.delete(escolaridade_id);
    return escolaridade_id
  }
}

export default DeleteEscolaridadeService;
