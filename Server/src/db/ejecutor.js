const oracledb = require('oracledb');
const dbConfig = require('./dbconfig');

module.exports = {
    query: async (query, bindParam) => {
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
                bindParam,
                {
                    outFormat: oracledb.OBJECT,
                    autoCommit: true
                }
            );
        } catch (err) {
            console.error(err);
            result = {error: err}
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
    },
    sp: async (query, bindParam) => {
        let connection;
        let result;
        query += ";";
    
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
                bindParam,
                {
                    outFormat: oracledb.OBJECT,
                    autoCommit: true
                }
            );
        } catch (err) {
            console.error(err);
            result = {error: err}
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
    },
    execute: (query, bindParam) => {
        return new Promise(
            async (res, rej) => {
                let conn;

                try {
                    conn = await oracledb.getConnection(
                        {
                            user: dbConfig.user,
                            password: dbConfig.password,
                            connectString: dbConfig.connectString
                        }
                    );
                    const result = await conn.executeMany(
                        query,
                        bindParam
                    );
                    conn.commit();
                    res(result);
                } catch (err) {
                    rej(err.message);
                } finally {
                    if (conn) {
                        try {
                            await conn.close();
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
            }
        )
    }
}

// module.exports = function () {

//     var connectionf = {

//         execwocallback: function (queryEst, params) {

//             oracledb.getConnection(
//                 config.configoracle, 
//                 function (err, connection) {
//                     if (err) {
//                         console.log('ERROR-CONEXIONAORACLE')
//                         console.error(err.message);
//                         callback()
//                     }

//                     connection.execute(
//                         queryEst,
//                         params,
//                         {
//                             outFormat: oracledb.OBJECT,
//                             autoCommit: true
//                         },
//                         function (err, result) {
//                             if (err) {
//                                 console.error(err.message);
//                                 doRelease(connection);
//                             } else {
//                                 doRelease(connection);
//                             }
//                         }
//                     );
//                 }
//             );

//             function doRelease(connection) {
//                 connection.release(
//                     function (err) {
//                         if (err) { console.error(err.message); }
//                     }
//                 );
//             }
//         },

//         exec: function (queryEst, params, callback) {

//             oracledb.getConnection(
//                 config.configoracle, 
//                 function (err, connection) {
//                     if (err) {
//                         console.log('ERROR-CONEXIONAORACLE')
//                         console.error(err.message);
//                         callback()
//                     }

//                     connection.execute(
//                         queryEst,
//                         params,
//                         {
//                             outFormat: oracledb.OBJECT,
//                             autoCommit: true
//                         },
//                         function (err, result) {
//                             if (err) {
//                                 console.error(err.message);
//                                 doRelease(connection);
//                                 callback(err)
//                             } else {
//                                 var respuestas = result.rows;
//                                 doRelease(connection);
//                                 callback(respuestas)
//                             }
//                         }
//                     );
//                 }
//             );

//             function doRelease(connection) {
//                 connection.release(
//                     function (err) {
//                             if (err) { console.error(err.message); }
//                     }
//                 );
//             }
//         },

//         executeMany(statement, binds = []) {
//             return new Promise(
//                 async (resolve, reject) => {
//                     let conn;
//                     let options = {
//                         autoCommit: true,
//                         batchErrors: true
//                     };
//                     options.outFormat = oracledb.OBJECT;

//                     try {
//                         conn = await oracledb.getConnection(config.configoracle);
//                         const result = await conn.executeMany(statement, binds, options);
//                         conn.commit();
//                         console.log(result);
//                         resolve(result);
//                     }
//                     catch (err) {
//                         console.log('1')
//                         console.log(err);
//                         reject(err);
//                     }
//                     finally {
//                         if (conn) { // conn assignment worked, need to close
//                             try {
//                                 await conn.close();

//                             } catch (err) {
//                                 console.log('2')
//                                 console.log(err);
//                             }
//                         }
//                     }
//                 }
//             );
//         },

//         execwcursor: function (queryEst, params, callback) {
//             var resultcallback = [];

//             oracledb.getConnection(
//                 config.configoracle, 
//                 function (err, connection) {
//                     if (err) {
//                         console.log('ERROR-CONEXIONAORACLE')
//                         console.error(err.message);
//                         callback()
//                     }

//                     connection.execute(queryEst,
//                         params,
//                         {
//                                 outFormat: oracledb.OBJECT,
//                                 autoCommit: true
//                         },
//                         function (err, result) {
//                             if (err) {
//                                 console.error(err.message);
//                                 doRelease(connection);
//                                 callback(err)
//                             } else {
//                                 fetchRowsFromRS(connection, result.outBinds.CURSOR_, 100);
//                             }
//                         }
//                     );
//                 }
//             );

//             function fetchRowsFromRS(connection, resultSet, numRows) {
//                 resultSet.getRows( // get numRows rows
//                     numRows,
//                     function (err, rows) {
//                         if (err) {
//                             console.log(err);
//                             doClose(connection, resultSet); // always close the ResultSet
//                         } else if (rows.length === 0) {   // no rows, or no more rows
//                             doClose(connection, resultSet); // always close the ResultSet
//                             callback(resultcallback)
//                         } else if (rows.length > 0) {
//                             rows.forEach(element => {
//                                 resultcallback.push(element);
//                             });

//                             fetchRowsFromRS(connection, resultSet, numRows);
//                         }
//                     }
//                 );
//             }

//             function doRelease(connection) {
//                 connection.release(
//                     function (err) {
//                         if (err) { console.error(err.message); }
//                     }
//                 );
//             }

//             function doClose(connection, resultSet) {
//                 resultSet.close(
//                     function (err) {
//                         if (err) { console.error(err.message); }
//                         doRelease(connection);
//                     }
//                 );
//             }
//         }
//     };

//     return connectionf;
// }