import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Pessoa from '../entities/Pessoa';
import EscolaridadeRepository from '../repositories/EscolaridadeRepository';
import Escolaridade from '../entities/Escolaridade';

interface Request {
    descricao: string;
}
class CreateEscolaridadeService {
  public async execute({ descricao }: Request): Promise<Escolaridade> {
    const escolaridadeRepo = getCustomRepository(EscolaridadeRepository);
    let checkEscolaridade = await escolaridadeRepo.findDescription(descricao);
    if (checkEscolaridade) {
      throw new AppError('Erro, Escolaridade já está cadastrada');
    }
    const escolaridade = escolaridadeRepo.create({descricao})
    escolaridadeRepo.save(escolaridade);
    return escolaridade
  }
}

export default CreateEscolaridadeService;
