export default () => ({
    port: process.env.PORT || 3000,
    database: {
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'B@13o01m22',
        database: process.env.DB_NAME || 'bomtawep',
        synchronize: process.env.DB_SYNCHRONIZE !== 'false' ? true : false || true,
    }
});