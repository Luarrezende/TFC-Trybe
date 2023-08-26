import { QueryInterface, INTEGER, STRING } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: INTEGER,
        },
        username: {
          allowNull: false,
          type: STRING,
        },
        email: {
          allowNull: false,
          type: STRING,
        },
        role: {
          allowNull: false,
          type: STRING,
        },
        password: {
          allowNull: false,
          type: STRING,
        },
      }
    )
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('users');
  }
}