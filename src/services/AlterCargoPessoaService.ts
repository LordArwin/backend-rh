import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Pessoa from '../entities/Pessoa';
import PessoaRepository from '../repositories/PessoaRepository';
import CargoRepository from '../repositories/CargoRepository';

interface Request {
    id: string;
    cargo_id: string;
}
class AlterCargoPessoaService {
  public async execute({ id, cargo_id }: Request): Promise<Pessoa> {
    const pessoaRepo = getCustomRepository(PessoaRepository);
    let checkPearson = await pessoaRepo.findOne({ where:{id}});
    const cargoRepo = getCustomRepository(CargoRepository);
    let checkCargo = await cargoRepo.findOne({ where:{id: cargo_id}});
    if (!checkPearson) {
      throw new AppError('Erro, Pessoa não está cadastrada');
    }
    else if(!checkCargo){
        throw new AppError('Erro, Cargo não registrado');
    }
    checkPearson.cargo_id = parseInt(cargo_id)
    pessoaRepo.save(checkPearson)
    return checkPearson
  }
}

export default AlterCargoPessoaService;
