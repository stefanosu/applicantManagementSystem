const express=require('express');
const app=express();
const router=require('./routes/routes.js');
const db=require('./database/database.js');
const basicAuth=require('express-basic-auth');
const scrypt=require('scrypt-js');
const pg=require('pg');
const hstore=require('pg-hstore');
const sequelize=require('sequelize');
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

router(app,db);

app.listen(port, (req, res)=>{
  console.log('Listening on port ' + port);
});
