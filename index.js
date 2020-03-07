const express=require('express');
const app=express();
const basicAuth=require('express-basic-auth');
const scrypt=require('scrypt-js');
const pg=require('pg');
const bodyParser=require('body-parser');
let port=process.env.PORT || 3000;


app.get('/', (req,res)=>{
  res.send('Hello');
});

app.listen(port, (req, res)=>{
  console.log('Listening on port ' + port);
});
