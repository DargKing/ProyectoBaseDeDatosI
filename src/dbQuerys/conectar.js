const sql = require("mssql")

const dbSettings = {
    user: 'yorman',
    password: '12345678',
    server: 'localhost',
    database: 'UVER',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
};


/**
 * 
 * @returns {Promise<sql.ConnectionPool>}
 */
const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.error(error);
    }
};

module.exports = getConnection