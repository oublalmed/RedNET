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

    var sql = "select username, contenuQst from etudiants e , Questions q where e.idEtudiant = q.idEtudiant ";
    
    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Client\\Questions', { results });        
    });
};

exports.Poser = (req, res) => {

    const { poserQ} = req.body;
    var sql = "insert into Questions (ContenuQst,idEtudiant) values(?,?) ";
    
    conn.query(sql,[poserQ],function (error, results) {
        if (error) {
            throw error;
        }
        res.redirect('/Questions');        
    });
};