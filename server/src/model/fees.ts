import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';

interface FeesAttributes{
    field_id  : number;
    field_name: string;
     
}

export class FeesInstance extends Model <FeesAttributes> {}

FeesInstance.init({
     field_id  : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    field_name: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
}, {
    sequelize:db,
    tableName: 'field_pass'
});
