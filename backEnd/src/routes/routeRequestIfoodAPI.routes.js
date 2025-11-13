import { Router } from "express";
import { makeRequestIfoodAPI } from "../controller/makeRequestIfood.controller";

export const routeRequestIfoodAPI = Router()

routeRequestIfoodAPI.get("/requestToIfoodAPI",makeRequestIfoodAPI)

// essa rota avisa o controller para ele fazer a requisição para a api do ifood pegar os dados do lead e enviar pro front-end  