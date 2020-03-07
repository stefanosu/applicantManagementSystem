const express=require('express');
const app=express();
const basicAuth=require('express-basic-auth');
const scrypt=require('scrypt-js');
const pg=require('pg');
const bodyParser=require('body-parser');
const session=require('express-session');
let port=process.env.PORT || 3000;

// models
//

app.use(basicAuth({
  users:{
    'admin': 'supersecret',
    'adam':'1234',
    'eve':'3456'
  },
  challenge: true,
  realm:'Imb4T3st4pp'
}));

app.use(session({
  secret:'24cc-4d44-wrrq38s',
  resave:true,
  saveUninitialized:true
}));

app.get('/', (req,res)=>{
  res.send('Hello');
});



app.listen(port, (req, res)=>{
  console.log('Listening on port ' + port);
});
