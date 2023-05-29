import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export interface AttributesInterface {
  id: number;
  teamName: string;
}

class TeamModel extends Model<AttributesInterface > {
  declare id: number;
  declare teamName: string;
}

TeamModel.init({
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING,
  },
}, {
  tableName: 'teams',
  sequelize: db,
  underscored: true,
  timestamps: false,
});

export default TeamModel;
