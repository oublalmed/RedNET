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

    var sql = "SELECT * FROM postes WHERE idEtat in (1,2,3)  ; SELECT * FROM postes WHERE idEtat = 3";

    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        var Tousposts = results[0];
        var postsDésactive = results[1];
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\Posts', { Tousposts,postsDésactive });
    });
};

exports.Approuver = async(req, res) => {
    const id = req.body.id;
    var sql = "UPDATE postes SET idEtat = 2 Where idPoste = ?";

    console.log(id)

    conn.query(sql,[id], function (error, results) {
        if (error) {
            throw error;
        }
        res.redirect('/Posts');
    });
};

exports.Refuser = async(req, res) => {
    const id = req.body.id ;
    var sql = "UPDATE postes SET idEtat = 3 Where idPoste = ? ";

    conn.query(sql,[id], function (error,results) {
        if (error) {
            throw error;
        }
        res.redirect('/Posts');
    });


};

