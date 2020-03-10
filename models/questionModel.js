const Sequelize=require('sequelize');
const db=require('./database.js');

const Question=db.define(
  'questions',
  {
    type: Sequelize.TEXT,
    form_id: Sequelize.INTEGER
  },
  { timestamps:false }
);
