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

const about = JSON.stringify(aboutMe)
router.get('/',(req,res)=>{
    res.send(about)
})

export default router;