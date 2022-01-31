import { EntityRepository, Repository } from 'typeorm';
import Cargo from '../entities/Cargo';

@EntityRepository(Cargo)
class CargoRepository extends Repository<Cargo> {
}

export default CargoRepository;
