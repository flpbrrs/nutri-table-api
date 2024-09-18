import Alimento from "./Alimento";

export default class AlimentoRepository {
    data: Alimento[] = 
    [
        new Alimento('Arroz branco cozido', 100, 124, 2.6, 1, 25.8),
        new Alimento('Peito de frango grelhado', 100, 239, 27, 0, 14),
        new Alimento('Feijão carioca cozido', 100, 76, 4.8, 13.6, 0.5),
    ]

    obterTodos()
    {
        return this.data
    }
}