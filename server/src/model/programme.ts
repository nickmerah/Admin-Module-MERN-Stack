import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';

interface ProgrammeAttributes{
    programme_id  : number;
    programme_name: string;
    aprogramme_name: string; 
}

export class ProgrammeInstance extends Model <ProgrammeAttributes> {}

ProgrammeInstance.init({
     programme_id   : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    programme_name: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    aprogramme_name: {
         type: DataTypes.STRING,
          allowNull: false,
    }
}, {
    sequelize:db,
    tableName: 'programme'
});
