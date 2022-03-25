const express = require("express")
const errorHandler = require("./middle/errorHandler")
app = express()

const auth = require("./middle/auth");
const logger = require("./middle/logger");

//app.use(auth);

// app.use((req,res, next) =>{
//     console.log("middleware")
//     // res.send("middleware");
//     next()
// })

// app.use((req,res,next) =>{
//     logger(`${req.method}\t${req.url}`, 'log.txt');
//     next()
// })

// app.use(express.static("public"))

// app.use(express.urlencoded({extended:false}))
// app.use(express.json())

// app.get('/', auth, (req, res) =>{
//     res.send("page is rendering")
// })

// app.get('/users',
// (req, res) =>{
//     logger(`${req.method}\t${req.url}`, 'log.txt');
// },
// (req, res) =>{
//     res.send(" users page is rendering")
// })


//CORS
const cors= require("cors");

app.use(cors());

 app.get('/', (req, res) =>{
     res.send("CORS samples")
})

app.get('/test/:id', (req, res,next) =>{
if (req.params.id == 1) {
    next({
        errorMessage :"Hata"
    })
}
})

app.use(errorHandler);

app.listen(3000, () => console.log("Running..."))