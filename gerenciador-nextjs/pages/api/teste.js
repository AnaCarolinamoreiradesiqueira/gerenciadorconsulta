
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login'

});

export default function handler (resq, res){
    connection.query('SELECT * FROM cadastro', (error, results) =>{

        res.status(200).json(results);
    });

    

}