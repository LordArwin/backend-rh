import { EntityRepository, Repository } from 'typeorm';
import Pessoa from '../entities/Pessoa';

@EntityRepository(Pessoa)
class PessoaRepository extends Repository<Pessoa> {
  public async findCpf(cpf: string): Promise<Pessoa | null> {
    const findPessoa = await this.findOne({
      where: { cpf },
    });
    return findPessoa || null;
  }
}

export default PessoaRepository;
