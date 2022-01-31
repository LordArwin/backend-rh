import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ensureAuth from '../middlewares/ensureAuth';
import CargoRepository from '../repositories/CargoRepository';
import AlterStatusCargoService from '../services/AlterStatusCargoService';
import CreateCargoService from '../services/CreateCargoService';
import DeleteCargoService from '../services/DeleteCargoService';

const cargoRouter = Router();

cargoRouter.use(ensureAuth);
cargoRouter.get('/', async (request, response) => {
    try{
        const cargoRepo = getCustomRepository(CargoRepository)
        const cargoList = await cargoRepo.find()
        response.status(201).json(cargoList);
    }catch (err:any) {
        response.status(400).json({ error: err.message })
    }
});

cargoRouter.post('/', async (request, response) => {
    try{
        const { descricao, cbo, departamento } = request.body;
        const cargoCreateService = new CreateCargoService();
        const cargo = await cargoCreateService.execute({ descricao, cbo, departamento })
        response.status(201).json(cargo);
    }catch (err:any) {
        response.status(400).json({ error: err.message })
    }
});

cargoRouter.patch('/alterar-status/:id', async (request, response) => {
    try{
        const {id} = request.params
        const alterStatusCargoService = new AlterStatusCargoService()
        const cargo = await alterStatusCargoService.execute({id})
        response.status(201).json(cargo);
    }catch (err:any) {
        response.status(400).json({ error: err.message })
    }
});

cargoRouter.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params
        const deleteCargoService = new DeleteCargoService()
        const cargo = await deleteCargoService.execute({id})
        response.status(200).json(cargo);
    }catch (err:any) {
        response.status(400).json({ error: err.message })
    }
});

export default cargoRouter;
