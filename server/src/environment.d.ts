
declare global {
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'test' | 'dev' | 'prod';
    SERVER_PORT?: number; //mark as optional
    DB_HOST: string;
    DB_USR: string ;
    DB_PWD: string;
    DB_NAME: string; 
    DB_DRIVER: string; 
  }
}
}

export {};