import { getCustomRepository } from 'typeorm';
import Cargo from '../entities/Cargo';
import AppError from '../errors/AppError';
import CargoRepository from '../repositories/CargoRepository';

interface Request {
    id: string;
}
class AlterStatusCargoService {
  public async execute({ id }: Request): Promise<Cargo> {
    const cargoRepo = getCustomRepository(CargoRepository);
    let checkCargo = await cargoRepo.findOne({ where:{id}});
    if (!checkCargo) {
      throw new AppError('Erro, Cargo não registrado');
    }
    checkCargo.status = checkCargo.status === 1 ? 0 : 1
    cargoRepo.save(checkCargo)
    return checkCargo
  }
}

export default AlterStatusCargoService;
