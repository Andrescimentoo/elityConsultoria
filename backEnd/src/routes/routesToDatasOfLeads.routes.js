import { Router } from "express";
import { saveLeads } from "../controller/saveLeads.controller.js";
import { findManyLeadsGenerateads } from "../controller/findManyLeadsGenerateads.controller.js";

export const routesToDatasOfLeads = Router()

routesToDatasOfLeads.get('/findManyLeads', findManyLeadsGenerateads) // essa rota avisa o controller findManyLeads para ele pegar todas as tabelas dos leads gerados e enviar para o front-end  
routesToDatasOfLeads.post('/saveLeads', saveLeads) // essa rota avisa o controller storeMoreLeads pra ele guardar mais um lead gerado na base de dados



