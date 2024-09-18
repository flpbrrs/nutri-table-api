import { v4 as uuidv4 } from 'uuid'

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class Id {
    static gerar() {
        return uuidv4()
    }
}
