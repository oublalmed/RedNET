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

    var sql = "SELECT titrePoste,contenuP , datePoste  FROM postes WHERE idEtat = 1";

    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\Posts', { results });
    });

    conn.end();

};

exports.Approuver = async(req, res) => {

    conn.connect();

    const id = req.params.id ;
    var sql = "UPDATE postes SET idEtat = 2 Where idPoste = ?";

    conn.query(sql, function (error, [id] ,results) {
        if (error) {
            throw error;
        }
        res.redirect('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\posts', { results });
    });

    conn.end();

};

exports.Refuser = async(req, res) => {

    conn.connect();

    const id = req.params.id ;
    var sql = "UPDATE postes SET idEtat = 3 Where idPoste = ? ";

    conn.query(sql, function (error,[id],results) {
        if (error) {
            throw error;
        }
        res.redirect('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\posts', { results });
    });

   conn.end();

};