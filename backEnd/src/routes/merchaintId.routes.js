import { Router } from "express";
import { requestByMerchaintID } from "../controller/makeRequestsIfood.controller.js";

export const routeMerchaintId = Router()

routeMerchaintId.get("/myApiBackEnd",requestByMerchaintID)