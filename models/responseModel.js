const Sequelize=require('sequelize');
const db=require('./database.js');

const Response=db.define(
  'responses',
  {
    type: Sequelize.TEXT,
    question_id:Sequelize.INTEGER,
    email: Sequelize.TEXT
  },
  { timestamps: false }
)
