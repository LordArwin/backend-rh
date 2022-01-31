import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ensureAuth from '../middlewares/ensureAuth';
import EscolaridadeRepository from '../repositories/EscolaridadeRepository';
import CreateEscolaridadeService from '../services/CreateEscolaridadeService';
import DeleteEscolaridadeService from '../services/DeleteEscolaridadeService';

const escolaridadeRouter = Router();
escolaridadeRouter.use(ensureAuth);
escolaridadeRouter.post('/', async (request, response) => {
    try{
        const { descricao } = request.body;
        const escolaridadeCreateService = new CreateEscolaridadeService();
        const escolaridade = await escolaridadeCreateService.execute({descricao})
        response.status(201).json(escolaridade);
    }catch (err:any) {
        response.status(400).json({ error: err.message })
    }
});

escolaridadeRouter.get('/', async (request, response) => {
    try{
        const escolaridadeRepo = getCustomRepository(EscolaridadeRepository)
        const escolaridadeList = await escolaridadeRepo.find()
        response.status(200).json(escolaridadeList);
    }catch (err:any) {
        response.status(400).json({ error: err.message })
    }
});

escolaridadeRouter.delete('/:escolaridade_id', async (request, response) => {
    try{
        const {escolaridade_id} = request.params
        const escolaridadeDeleteService = new DeleteEscolaridadeService()
        const idDeleted = await escolaridadeDeleteService.execute({escolaridade_id})
        response.status(200).json(idDeleted);
    }catch (err:any) {
        response.status(400).json({ error: err.message })
    }
});

export default escolaridadeRouter;
