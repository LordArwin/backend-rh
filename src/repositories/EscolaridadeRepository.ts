import { EntityRepository, Repository } from 'typeorm';
import Escolaridade from '../entities/Escolaridade';

@EntityRepository(Escolaridade)
class EscolaridadeRepository extends Repository<Escolaridade> {
    public async findDescription(descricao: string): Promise<Escolaridade | null> {
        const findEscolaridade = await this.findOne({
          where: { descricao },
        });
        return findEscolaridade || null;
      }
}

export default EscolaridadeRepository;
