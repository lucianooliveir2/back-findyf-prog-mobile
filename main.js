
import express from 'express'
import * as db from './database/database.js'
import bodyParser from 'body-parser'

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send("aaa");
})

app.post('/login', (req,res)=>{
    db.login(req.body.email, req.body.senha).then((result)=>{
        res.send(result)
    })
})

app.get('/getAnimais', (req,res)=>{
    db.getAnimais().then((result)=>{
        res.send(result);
    })
})

app.post('/favoritar', (req,res)=>{

})

app.post('/adotar', (req,res)=>{

})

app.get('/getAnimaisByAbrigo', (req,res)=>{
    db.getAnimais().then((result)=>{
        res.send(result);
    })
})

app.get('/getAbrigo', (req,res)=>{
    db.getAnimais().then((result)=>{
        res.send(result);
    })
})

app.listen(port,() =>{
    console.log("pai ta on 😎")
})