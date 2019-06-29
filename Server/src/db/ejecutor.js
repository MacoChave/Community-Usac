const oracledb = require('oracledb');
const dbConfig = require('./dbconfig');

module.exports = {
    select: async (query, params) => {
        let connection;
        let result;
    
        try {
            connection = await oracledb.getConnection(
                {
                    user: dbConfig.user,
                    password: dbConfig.password,
                    connectString: dbConfig.connectString
                }
            );
    
            result = await connection.execute(
                query,
                params
            );
        } catch (err) {
            result = {
                error: err
            }
            console.error(err);
        } finally {
            if (connection) {
                try {
                    await connection.close();
                    return result;
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }
}
// module.exports = async () => {
//     let connection;

//     try {
//         connection = await oracledb.getConnection(
//             {
//                 user: dbConfig.user,
//                 password: dbConfig.password,
//                 connectString: dbConfig.connectString
//             }
//         );

//         let result = await connection.execute(
//             "SELECT * FROM Facultad",
//             []
//         );
//         console.log(result.rows);
//     } catch (err) {
//         console.error(err);
//     } finally {
//         if (connection) {
//             try {
//                 await connection.close();
//             } catch (err) {
//                 console.error(err);
//             }
//         }
//     }
// }
