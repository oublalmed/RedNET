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

    var sql = "select * from fichiers ";
    
    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        var Fichier = results;
        console.log(Fichier);
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\Fichiers', { Fichier});        
    });
};

exports.Ajouter = (req, res) => {

    const { nomF, chemin } = req.body;
    var sql = "insert into fichiers (cheminFichier,nomFichier) values(?,?) ";
    
    conn.query(sql,[chemin,nomF ],function (error, results) {
        if (error) {
            throw error;
        }
        res.redirect('/Fichiers');        
    });
};

exports.Supprimer = (req, res) => {

    var id = req.params.id ;
    var sql = "DELETE FROM fichiers WHERE idFichier = ? ";

    conn.query(sql,[id], function (error, results) {
        if (error) {
            throw error;
        }
        console.log(results, id);
        res.redirect('/Fichiers')
    });

};