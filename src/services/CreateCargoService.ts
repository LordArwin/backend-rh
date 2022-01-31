import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Cargo from '../entities/Cargo';
import CargoRepository from '../repositories/CargoRepository';

interface Request {
    descricao: string;
    cbo:string;
    departamento:string;
}
class CreateCargoService {
  public async execute({ descricao, cbo, departamento}: Request): Promise<Cargo> {
    const cargoRepo = getCustomRepository(CargoRepository);
    const checkCargo = await cargoRepo.findOne({where:{descricao}});
    if (checkCargo) {
      throw new AppError('Erro, Cargo já está cadastrada');
    }
    const cargo = cargoRepo.create({ 
        descricao, cbo, departamento
    });
    await cargoRepo.save(cargo);
    return cargo;
  }
}

export default CreateCargoService;
