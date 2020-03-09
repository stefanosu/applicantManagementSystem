const sequelize=require('sequelize');

const databaseURL='postgresql://[db-user]:[password]@127.0.0.1:5432/node-postgres-sequelize';

const database= new sequelize(databaseURL);

module.exports=database;
