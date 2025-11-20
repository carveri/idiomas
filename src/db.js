import pg from "pg";

process.loadEnvFile()


export const pool = new pg.Pool({
    user: process.env.USER_PG,
    host: process.env.HOST_PG,
    password: process.env.PASSWORD_PG,
    database: process.env.DATABASE_PG,
    port: process.env.PORT_PG
})

pool.query('SELECT NOW()').then(result =>{
    //console.log('resultado de la db:', result);}
})