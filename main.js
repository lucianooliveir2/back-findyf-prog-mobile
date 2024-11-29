
import express from 'express'
import * as db from './database/database.js'

const app = express()

const port = 3000

app.get('/', (req,res)=>{
    res.send("aaa");
})

app.post('/login', (req,res)=>{
    res.send(db.login('cleber@gmail.com', "123123"))
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
    console.log("rodando foda")
})