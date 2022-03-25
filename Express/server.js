const { application } = require("express");
PORT = 3000
const express = require("express");



const app = express();


// app.get("/",(req, res)=>{

//     res.send("Hello-Server-Hii");


// })

// app.get('/users/:id', (req, res) =>{
//     res.send(`<h1>Users ID: ${req.params.id}</h1>`)
// })

app.use(express.json());


const lessons =[
    {id:1,name:'Fizik'},
    {id:2,name:'Kimya'},
    {id:3,name:'Mat'}
]
app.get('/api/v1/lessons', (req, res) =>{
         res.send(lessons)
     })

        app.post('/api/v1/lessons', (req, res) =>{
            const lesson = {
                id: lessons.length + 1,
                name: req.body.name
            }

            lessons.push(lesson);
            res.send(lesson);
        })


app.listen(PORT, ()=> console.log(`Server running ${PORT}`))