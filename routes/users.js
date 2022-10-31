

const express = require('express')
const router = express.Router()


const data={
    "slackUsername": "Denis Kiplangat",
    "backend":true,
    "age":24,
    "bio":'My name is Denis and I love code'  
}



router.get('/' ,(req,res)=>{
    res.json(data)
    console.log('hello')
})




module.exports = router;