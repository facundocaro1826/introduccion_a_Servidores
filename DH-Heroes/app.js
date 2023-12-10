const express = require('express')
const path = require('path')
const app = express()

const port = 3030; 

app.use(express.static("public"))

const createPath = (filename)=> path.join(__dirname,`./views/${filename}.html`)  

app.get('/', (req, res)=>{
 res.sendFile(createPath('index'))
});

app.get('/babbage', (req, res)=>{
    res.sendFile(createPath('babbage'))
});

app.get('/berners-Lee', (req, res)=>{
    res.sendFile(createPath('berners-Lee'))
});

app.get('/clarke', (req, res)=>{
    res.sendFile(createPath('clarke'))
});

app.get('/hamilton', (req, res)=>{
    res.sendFile(createPath('hamilton'))
});

app.get('/hopper', (req, res)=>{
    res.sendFile(createPath('hopper'))
});

app.get('/lovelace', (req, res)=>{
    res.sendFile(createPath('lovelace'))
});

app.get('/turing', (req, res)=>{
    res.sendFile(createPath('turing'))
})




app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

