import {Dialect,Sequelize} from 'sequelize';

const dbDriver = process.env.DB_DRIVER as Dialect;
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USR as string
const dbHost = process.env.DB_HOST
const dbPassword = process.env.DB_PWD

const db = new Sequelize(dbName, dbUser, dbPassword, {
    dialect:dbDriver,
    host:dbHost,
    logging: false,
    define: {
    timestamps: false
  }
});


db.sync().then(() => {
    console.log('DB Connected');
}).catch((err)=>{
    console.log("Failed to connect to db" + err.message)
});

export default db; 