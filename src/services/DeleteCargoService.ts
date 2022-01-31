import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import CargoRepository from '../repositories/CargoRepository';

interface Request {
    id: string;
}
class DeleteCargoService {
  public async execute({ id }: Request): Promise<string> {
    const cargoRepo = getCustomRepository(CargoRepository);
    let checkCargo = await cargoRepo.findOne({where:{id}});
    if (!checkCargo) {
      throw new AppError('Erro, cargo não cadastrado');
    }
    cargoRepo.delete(id);
    return id
  }
}

export default DeleteCargoService;
