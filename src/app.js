import 'dotenv/config';

// importar o express
import express from 'express';
import { router } from './routes/router.js';

const port = 3000;

const app = express();

app.use(express.json()) // permite o express entender json
app.use(router)

app.listen(port, () => {
  console.log(`Rodando sistema na porta ${port}`)
})

