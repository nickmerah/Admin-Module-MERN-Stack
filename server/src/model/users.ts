import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
 import { GroupInstance } from '../model/groups';


interface UserAttributes{
    id: number;
    ad_username: string;
    ad_password: string;
    ad_title?: string; 
     ad_surname: string;
    ad_firstname: string; 
    ad_othernames?: string; 
    ad_email: string; 
    ad_status: string ; 
    ad_group: string;
   
}

export class UserInstance extends Model <UserAttributes> {}

UserInstance.init({
     id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    },ad_username : {
        type: DataTypes.STRING,
         allowNull: false,
    }, 
    ad_password: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    ad_title: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
    ad_surname: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    ad_firstname: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    ad_othernames: {
         type: DataTypes.STRING,
          allowNull: true,
    },   
    ad_email: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    ad_status: {
         type: DataTypes.STRING,
          allowNull: false,
    },   
    ad_group: {
         type: DataTypes.STRING,
          allowNull: false,
    } 
}, {
    sequelize:db,
    tableName: 'admin_users'
});

UserInstance.belongsTo(GroupInstance, {foreignKey:'ad_group'});
