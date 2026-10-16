const mysql = requiere('')

const pool  = mysql.createPool({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'Losperroscomenchile123_',
    database: 'cecyt9_local',
    dateStrings: true,
    
})