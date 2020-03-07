const express=require('express');
const app=express();
const basicAuth=require('express-basic-auth');
const scrypt=require('scrypt-js');
const pg=require('pg');
const bodyParser=require('body-parser');
const session=require('express-session');
let port=process.env.PORT || 3000;


app.use(session({
  secret:'24cc-4d44-wrrq38s',
  resave:true,
  saveUninitialized:true
}));

app.use(basicAuth({
  users:{
    'admin': 'supersecret',
    'adam':'1234',
    'eve':'3456'
  },
  challenge: true,
  realm:'Imb4T3st4pp'
}));

app.get('/', (req,res)=>{
  console.log(req);
  res.send("You're logged in");
});



app.listen(port, (req, res)=>{
  console.log('Listening on port ' + port);
});
