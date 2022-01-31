import { request, response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ensureAuth from '../middlewares/ensureAuth';
import PessoaRepository from '../repositories/PessoaRepository';
import AlterCargoPessoaService from '../services/AlterCargoPessoaService';
import AlterEscolaridadePessoaService from '../services/AlterEscolaridadePessoaService';
import CreatePessoaService from '../services/CreatePessoaService';
import StatusPessoaService from '../services/StatusPessoaService';
import UpdatePessoaService from '../services/UpdatePessoaService';

const pessoaRouter = Router();

pessoaRouter.use(ensureAuth);
pessoaRouter.get('/', async (request, response)=>{
  try{
    const pessoaRepository = getCustomRepository(PessoaRepository);
    const listPessoas = await pessoaRepository.find({relations: ["escolaridade", "cargo"] });
    response.status(200).json(listPessoas);
  }catch(err:any){
    response.status(400).json({ error: err.message });
  }
})
pessoaRouter.get('/:id', async (request, response)=>{
  try{
    const {id} = request.params
    const pessoaRepository = getCustomRepository(PessoaRepository);
    const pessoa = await pessoaRepository.findOne({where:{id}});
    response.status(200).json(pessoa);
  }catch(err:any){
    response.status(400).json({ error: err.message });
  }
})

pessoaRouter.post('/', async (request, response) => {
  try {
    const { 
        cpf,
        tipo_pessoa,
        email,
        sexo,
        nome,
        nascimento,
        pis,
        end_bairro,
        end_cep,
        end_cidade,
        end_logradouro,
        end_numero,
        end_uf,
        escolaridade_id,
        cargo_id
    } = request.body;
    const pessoaCreateService = new CreatePessoaService();
    const pessoaCreated = await pessoaCreateService.execute({ 
        cpf,
        tipo_pessoa,
        email,
        sexo,
        nome,
        nascimento,
        pis,
        end_bairro,
        end_cep,
        end_cidade,
        end_logradouro,
        end_numero,
        end_uf,
        escolaridade_id,
        cargo_id
    });
    response.status(201).json(pessoaCreated);
  } catch (err:any) {
    response.status(400).json({ error: err.message });
  }
});

pessoaRouter.put('/:id', async (request, response)=>{
  try{
    const { 
      tipo_pessoa,
      email,
      sexo,
      nome,
      nascimento,
      pis,
      end_bairro,
      end_cep,
      end_cidade,
      end_logradouro,
      end_numero,
      end_uf,
      escolaridade_id,
      cargo_id
    } = request.body;
    const {id} = request.params
    const pessoaUpdateService = new UpdatePessoaService();
    const pessoaUpdated = await pessoaUpdateService.execute({ 
      id,
      tipo_pessoa,
      email,
      sexo,
      nome,
      nascimento,
      pis,
      end_bairro,
      end_cep,
      end_cidade,
      end_logradouro,
      end_numero,
      end_uf,
      escolaridade_id,
      cargo_id
    })
    response.status(201).json(pessoaUpdated)
  }catch(err:any){
    response.status(400).json({ error: err.message });
  }
})

pessoaRouter.patch('/alterar-status/:id', async (request, response) =>{
  try{
    const {id} = request.params;
    const pessoaStatusService = new StatusPessoaService();
    const pessoaStatus = await pessoaStatusService.execute({id})
    response.status(200).json(pessoaStatus);
  }catch (err:any) {
    response.status(400).json({ error: err.message });
  }
})

pessoaRouter.patch('/alterar-escolaridade/:id', async (request, response) =>{
  try{
    const {id} = request.params;
    const {escolaridade_id } = request.body;
    const pessoaEscolaridadeService = new AlterEscolaridadePessoaService();
    const pessoaEscolaridade = await pessoaEscolaridadeService.execute({id, escolaridade_id})
    response.status(200).json(pessoaEscolaridade);
  }catch (err:any) {
    response.status(400).json({ error: err.message });
  }
})

pessoaRouter.patch('/alterar-cargo/:id', async (request, response) =>{
  try{
    const {id} = request.params;
    const {cargo_id } = request.body;
    const pessoaCargoService = new AlterCargoPessoaService();
    const pessoaCargo = await pessoaCargoService.execute({id, cargo_id})
    response.status(200).json(pessoaCargo);
  }catch (err:any) {
    response.status(400).json({ error: err.message });
  }
})

export default pessoaRouter;
