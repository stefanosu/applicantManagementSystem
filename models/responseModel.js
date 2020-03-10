const Sequelize=require('sequelize');
const db=require('./database.js');

const Response=db.define(
  'responses',
  {
    type: Sequelize.TEXT,
    question_id:Sequelize.NUMBER,
    email:Sequelize.TEXT
  }
)
