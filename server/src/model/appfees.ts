import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 import { FeesInstance } from '../model/fees';
  import { ProgrammeInstance } from '../model/programme';


interface AppFeesAttributes{
    fee_id: number;
    item_id: number;
    amount: number;
    prog_id: number; 
     f_p_time: number; 
}

export class AppFeesInstance extends Model <AppFeesAttributes> {}

AppFeesInstance.init({
     fee_id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    },	item_id : {
        type: DataTypes.NUMBER,
         allowNull: false,
    }, 
    amount: {
         type: DataTypes.NUMBER,
          allowNull: false,
    },   
    prog_id: {
         type: DataTypes.NUMBER,
          allowNull: false,
    },   
    f_p_time: {
         type: DataTypes.NUMBER,
          allowNull: false,
    } 
}, {
    sequelize:db,
    tableName: 'fees_amt_pass'
});

AppFeesInstance.belongsTo(FeesInstance, {foreignKey:'item_id'});
AppFeesInstance.belongsTo(ProgrammeInstance, {foreignKey:'prog_id'});
