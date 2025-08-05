import { findManyRestaurants } from "../controller/findManyRestaurants.controller";
import router from "express/lib/router";
import { storeNewRestaurant } from "../controller/storeNewRestaurant.controller";

export const routesToDatasOfConsultes = router()

routesToDatasOfConsultes.get('/conceitualNameGet',findManyRestaurants)
routesToDatasOfConsultes.post('/conceeitualnamePost',storeNewRestaurant)