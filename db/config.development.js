export const config = {
    host: process.env.DB_HOST, // Name of docker Service instead of 'localhost'
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'gatos_sin_hogar'
};
