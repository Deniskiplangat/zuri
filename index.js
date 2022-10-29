import express from 'express';

import userRoutes from './routes/users.js'

const app = express()

const PORT = 5000

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', userRoutes)
app.get('/',(req,res)=>{
    res.send('something')
})

app.listen(PORT, ()=>{
    console.log('hello world')
})