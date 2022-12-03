import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 import { StateInstance } from '../model/sor';
 
interface LgaAttributes{
    lga_id: number;
    state_id: number;
    lga_name: string; 
}

export class LgaInstance extends Model <LgaAttributes> implements LgaAttributes {
     lga_id!: number;
    state_id!: number;
    lga_name!: string;
 
  };
 

LgaInstance.init({
     lga_id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    state_id: {
         type: DataTypes.NUMBER,
          allowNull: false,
    }, 
    lga_name: {
        type: DataTypes.STRING,
         allowNull: false,
        
    } 
}, {
    sequelize:db,
    tableName: 'lga'
});

LgaInstance.belongsTo(  StateInstance, {foreignKey:'state_id'  });