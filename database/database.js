import mysql from 'mysql'
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'findyf',
    port: '3308'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err
  
    console.log('banco de dados on')
})

function getAnimais(){
    return new Promise((resolve, reject)=>{
        connection.query('SELECT * FROM `abrigo`;', (err, rows, fields)=>{
            if(err) reject(err)
            resolve(rows)
        })
    }) 
}

function login(email, senha){
    return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM usuario WHERE us_email = '${email}' AND us_senha = '${senha}';`, (err, rows, fields)=>{
            if(err) {
                reject(err)
            }
            resolve(rows)
        })
    }).catch((r)=>{console.log(r)})

}

export {getAnimais, login}
