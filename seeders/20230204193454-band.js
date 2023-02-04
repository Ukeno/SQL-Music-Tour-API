'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('band', [{
      name: 'The Useful Books',
      genre: 'Rock',
      available_start_time: '11:00:00',
      end_time: '23:00:00'
    }])
  },

  async down(queryInterface, Sequelize) {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('band', null, {})

  }
}
