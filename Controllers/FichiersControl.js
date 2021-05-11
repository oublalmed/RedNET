var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ensiasoverflow',
    debug: false,
    multipleStatements: true
});

exports.view = (req, res) => {

    
    conn.connect();

    var sql = "select * from fichiers ";
    
    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        var Fichier = results;
        console.log(Fichier);
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\Fichiers', { Fichier});

        
    });

    conn.end();
};