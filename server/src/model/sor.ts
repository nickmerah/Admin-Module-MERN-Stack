import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 
interface SorAttributes{
    state_id : number;
    state_name: string;
    
}

export class StateInstance extends Model <SorAttributes> implements SorAttributes {
     state_id!: number;
    state_name!: string;
   
 
  };
 
StateInstance.init({
     state_id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    state_name: {
         type: DataTypes.STRING,
          allowNull: false,
    } 
    
}, {
    sequelize:db,
    tableName: 'state'
});

