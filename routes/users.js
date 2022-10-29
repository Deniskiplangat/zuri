import express from 'express'

const router = express.Router()

const aboutMe = [
      { 
        slackUsername: "Denis Ruto",
        backend: true,
        age: 24,
        bio:"Hello World. My name is Denis and I love Tech"
     }
]

router.get('/',(req,res)=>{
    res.send(aboutMe)
})

export default router;