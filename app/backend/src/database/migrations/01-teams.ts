import { QueryInterface, INTEGER, STRING } from 'sequelize'

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable(
      'teams',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: INTEGER,
        },
        team_name: {
          allowNull: false,
          type: STRING,
        },
      }
    )
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('teams');
  }
}