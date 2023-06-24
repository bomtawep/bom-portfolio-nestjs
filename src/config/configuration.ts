export default () => ({
    port: process.env.PORT || 3000,
    API_PREFIX: process.env.API_PREFIX,
    database: {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: process.env.DB_SYNCHRONIZE !== 'false' ? true : false,
    }
});