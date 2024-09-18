import express from 'express'
import cors from 'cors'

import alimentosRouter from './routes/alimentos'

const app = express()

app.use(cors())

app.use('/alimentos', alimentosRouter)

app.listen(8080, () => {
    console.log('Server port running on 8080 :rocket:')
})
