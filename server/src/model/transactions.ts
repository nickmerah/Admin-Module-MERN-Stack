import {Model, DataTypes} from 'sequelize';
import db from '../config/database.config';
  import { ProgrammeInstance } from '../model/programme';
 
interface TransactionAttributes{
    trans_id  : number;
    log_id: number;
    fee_id: number;
    fee_name: string;
    trans_no : string;
    fee_amount: string;
    trans_date: string;
    t_date: string;
    trans_year: string;
    trans_custom1: string;
    fullnames: string;
    appno: string;
    prog_id: number;
    paychannel: string;
    semail: string;
    rrr: string;
    flw_id: string;
    flw_flw_ref: string;
    
}

export class TransactionInstance extends Model <TransactionAttributes> implements TransactionAttributes {
    trans_id!: number;
    log_id!: number;
    fee_id!: number;
    fee_name!: string;
    trans_no !: string;
    fee_amount!: string;
    trans_date!: string;
    t_date!: string;
    trans_year!: string;
    trans_custom1!: string;
    fullnames!: string;
    appno!: string;
    prog_id!: number;
    paychannel!: string;
    semail!: string;
    rrr!: string;
    flw_id!: string;
    flw_flw_ref!: string;
   
 
  };
 
TransactionInstance.init({
     trans_id : {
        type: DataTypes.NUMBER,
        primaryKey: true,
     //   allowNull: false,
    }, 
    log_id: {
         type: DataTypes.NUMBER,
          allowNull: false,
    } 
    , 
    fee_id: {
         type: DataTypes.NUMBER,
          allowNull: false,
    }, 
    fee_name: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    trans_no: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    fee_amount: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    trans_date: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    t_date: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    trans_year: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    trans_custom1: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    fullnames: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    appno: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
     
    prog_id: {
         type: DataTypes.NUMBER,
          allowNull: false,
    } ,
    paychannel: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    semail: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    rrr: {
         type: DataTypes.STRING,
          allowNull: false,
    }, 
    flw_id: {
         type: DataTypes.STRING,
          allowNull: true,
    }, 
    flw_flw_ref: {
         type: DataTypes.STRING,
          allowNull: true,
    }
    
}, {
    sequelize:db,
    tableName: 'transaction_app'
});

TransactionInstance.belongsTo(ProgrammeInstance, {foreignKey:'prog_id'});