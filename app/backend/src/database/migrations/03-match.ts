import { QueryInterface, INTEGER, BOOLEAN } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable(
      'matches',
      {
        id: {
          type: INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        home_team_id: {
          type: INTEGER,
          allowNull: false,
          references: {
            model: 'teams',
            key: 'id',
          },
        },
        home_team_goals: {
          type: INTEGER,
          allowNull: false,
        },
        away_team_id: {
          type: INTEGER,
          allowNull: false,
          references: {
            model: 'teams',
            key: 'id',
          },
        },
        away_team_goals: {
          type: INTEGER,
          allowNull: false,
        },
        in_progress: {
          type: BOOLEAN,
          allowNull: false,
        },
      }
    )
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('matches');
  }
}