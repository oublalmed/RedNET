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

exports.view = (req, res) => {

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

};

exports.Supprimer = (req, res) => {

    var id = req.params.id ;
    var sql = "DELETE FROM etudiants WHERE idEtudiant = ? ";

    conn.query(sql,[id], function (error, results) {
        if (error) {
            throw error;
        }

        console.log(results, id);

        res.redirect('/Utilisateurs')
    });

};