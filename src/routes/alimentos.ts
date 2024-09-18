import { Router } from "express";
import AlimentoRepository from "../core/alimentos/AlimentoRepository";

const alimentoRespository = new AlimentoRepository()
const router = Router()

router.get('/', (_, res) => {
    const data = alimentoRespository.obterTodos()

    res.status(200).json(data)
})

export default router;