module.exports = {
    user          : process.env.NODE_ORACLEDB_USER || "SYSTEM",
    password      : process.env.NODE_ORACLEDB_PASSWORD || "123",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/XE",
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
  };