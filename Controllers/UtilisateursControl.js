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

    var sql = "SELECT idEtudiant,prénom,nom,mailEtud,telEtud,libelleFiliere FROM etudiants E , filiere F WHERE E.idFiliere=F.idFiliere";

    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        console.log(results);
        var Users = results;
        //var deleteUsers = results[1];
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\utilisateurs', { Users});
    });

    conn.end();

};

exports.Supprimer = (req, res) => {

    conn.connect();

    var id = req.params.idEtudiant ;
    var sql = "DELETE FROM etudiants WHERE idEtudiant = ? ";

    conn.query(sql,[id], function (error, results) {
        if (error) {
            throw error;
        }
        console.log("ok");
        //res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\Utilisteurs');
    });
    conn.end();

};