async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");

    const connection = await mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        passsword:"",
        database:"lnw_bijú"

    });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

// Funcoes de querys
async function selectprodutos(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tabela_acessorios');
    return rows;
    //return rows
}

module.exports = {selectprodutos}


