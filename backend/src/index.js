import express from 'express';
import dotenv from "dotenv"



dotenv.config();

const app = express();
const port = process.env.PORT ;
console.log(process.env)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
