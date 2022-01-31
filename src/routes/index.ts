// src/routes/index.ts
import { Router } from 'express';
import userRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import pessoaRouter from './pessoa.routes';
import escolaridadeRouter from './escolaridade.routes';
import cargoRouter from './cargo.routes';

const routes = Router();
routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/pessoa',pessoaRouter)
routes.use('/escolaridade',escolaridadeRouter)
routes.use('/cargo',cargoRouter)
export default routes;
