
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
/*
exports.SelectFiliere = (req, res) => {

    var sql = "select libelleFiliere from filiere";
    
    conn.query(sql,function (error, results) {
        if (error) {
            throw error;
        }
        filiere = results ;
        console.log(filiere);      
    });
};

exports.Ajouter = (req, res) => {

    const { firstname,lastname,Username,email,phone,password,filiere } = req.body;
    var sql = "INSERT INTO etudiants (idEtudiant,prénom,nom,username,password,mailEtud,telEtud,idFiliere) VALUES (?,?,?,?,?,4);";
    
    conn.query(sql,[firstname,lastname,Username,password,email,phone,filiere],function (error, results) {
        if (error) {
            throw error;
        }
        res.redirect('/Home');        
    });
};
*/

exports.Login = (req, res) => {

    const name = req.body.username;
    const pass = req.body.password;

    var sql = "select * from etudiants where username = ? and password = ? ;";

    conn.query(sql,[name, pass] ,function (error, results) {
        if (error) {
            throw error;
        }
        else if (results.length > 0) {
           //req.session.loggedin = true;
           //req.session.name = name;
           console.log("Tu es connecté Mr : " + name);
           res.redirect('/Feed');
        }
    });

};

exports.profileView = async (req,res) => {
    
    var sql = "select username , contenuP ,datePoste from postes p , etudiants e where e.idEtudiant = p.idEtudiant ";

    conn.query(sql, function (error,results) {
        if (error) {
            throw error;
        }
        console.log(results);
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Client\\profile',{results});
    });

};
