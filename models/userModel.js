const Sequelize=require('sequelize');
const db=require('database.js');

const User=db.define(
  'users',
   name: {
    type: Sequelize.TEXT,
  },
  password: {
    type: Sequelize.TEXT
  },
  { timestamps: false }
);
