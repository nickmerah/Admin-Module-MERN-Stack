import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
  import { ProgrammeInstance } from '../model/programme';
interface AppSessionAttributes{
    id : number;
    cs_session: string;
    start_date?: string;
    end_date?: string;
    prog_id: number;
    status: string;
}

export class AppSessionInstance extends Model <AppSessionAttributes> {}

AppSessionInstance.init({
     id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    cs_session: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    start_date: {
        type: DataTypes.STRING,
         allowNull: true,
        
    }, 
    end_date: {
        type: DataTypes.STRING,
         allowNull: true,
        
    }, 
    prog_id: {
        type: DataTypes.NUMBER,
         allowNull: false,
        
    }, 
    status: {
        type: DataTypes.STRING,
         allowNull: false,
        
    }
}, {
    sequelize:db,
    tableName: 'app_current_session'
});

AppSessionInstance.belongsTo(ProgrammeInstance, {foreignKey:'prog_id'});