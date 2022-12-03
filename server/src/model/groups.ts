import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 
interface GroupAttributes{
    group_id : number;
    group_name: string;
    group_description: string;
    
}

export class GroupInstance extends Model <GroupAttributes> {}

GroupInstance.init({
     group_id  : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    group_name: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    group_description: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
     
}, {
    sequelize:db,
    tableName: 'group_table'
});

 