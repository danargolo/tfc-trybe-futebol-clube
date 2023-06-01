import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export interface UsersInterface {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}
class UsersModel extends Model<UsersInterface> {
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}
UsersModel.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  username: {
    allowNull: false,
    type: STRING,
  },
  role: {
    allowNull: false,
    type: STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  tableName: 'users',
  underscored: true,
  timestamps: false,
});

export default UsersModel;
