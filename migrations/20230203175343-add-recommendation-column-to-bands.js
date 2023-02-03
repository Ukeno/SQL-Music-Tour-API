'use strict';
const {DataTypes} = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('band', 'recommendation', {
      type: DataTypes.STRING
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('band', 'recommendation')
  }
};

// From (Activity: Writing Custom Migrations) SQLDM-5 DAY 5