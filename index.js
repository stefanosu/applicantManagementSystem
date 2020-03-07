const express=require('express');
const app=express();
const basicAuth=require('express-basic-auth');
const scrypt=require('scrypt-js');
let port=process.env.PORT ||
