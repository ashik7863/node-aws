const express=require('express');
const cors=require('cors');
const PORT = process.env.PORT || 4500;

const router=require('./Routes/Router');


const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static('public'));


app.get('/test',(req,res)=>{
    res.send('Hello World2');
})


app.use(router);

app.listen(PORT,function(){
    console.log(`Server Started at ${PORT}`)
})