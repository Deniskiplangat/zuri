import express from 'express';

import userRoutes from './routes/users.js'

const app = express()


const PORT = process.env.PORT || 80

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', userRoutes)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    res.send('working')
})

app.listen(PORT, ()=>{
    console.log('hello world')
})
