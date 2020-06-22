import { Model, Sequelize } from "sequelize";

class Peers extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
          },
        },
        secret: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        callCenter: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        hideOnAgenda: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        sipRegStatus: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        sipIp: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        iaxRegStatus: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        iaxIp: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        createdBy: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        updatedBy: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },

      {
        sequelize,
      }
    );

    return this;
  }
}

export default Peers;
