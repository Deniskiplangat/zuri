

const express =require ('express')
const app =express()

const routes = require('./routes/users.js')
const cors = require('cors');




app.use(express.json())



app.use('/', routes)
app.use(cors({
    origin: '*'
}));

 

const port = process.env.PORT || 80

app.listen(port,()=>{
    console.log('server running on port:' + port );
})