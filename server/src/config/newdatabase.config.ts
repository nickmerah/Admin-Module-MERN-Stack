import { Sequelize } from 'sequelize-typescript';

const dbDriver = process.env.DB_DRIVER ;
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USR as string;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PWD;

const db = new Sequelize({
  database: dbName,
  dialect: 'sqlite',
  username: dbUser,
  host:dbHost,
  password: dbPassword,
  storage: ':memory:',
  models: [__dirname + '/models'], // or [Player, Team],
});

db.sync().then(() => {
    console.log('DB Connected');
}).catch((err)=>{
    console.log("Failed to connect to db" + err.message)
});

export default db; 