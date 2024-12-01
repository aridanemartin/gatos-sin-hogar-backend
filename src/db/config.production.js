export const config = {
    host: process.env.DB_HOST, // Name of docker Service instead of 'localhost'
    port: process.env.DB_PORT,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'gatos_sin_hogar'
};
