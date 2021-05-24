var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ensiasoverflow',
    debug: false,
    multipleStatements: true
});

conn.connect();

exports.A = async (req,res) => {

    var sql = "select username , contenuP ,datePoste from postes p , etudiants e where e.idEtudiant = p.idEtudiant and idEtat = 2 ";

    conn.query(sql, function (error,results) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.redirect('/Feed',{results});
    });

};