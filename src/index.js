import express from 'express'
import receiptsRouter from './routes/receipts.js';

const app = express()

app.use(express.json())
app.use('/receipts', receiptsRouter);

app.listen(5500, () => {
  console.log(`App listening on PORT ${5500}`);
});