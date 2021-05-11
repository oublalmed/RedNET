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

    var sql = "SELECT idEtudiant,prénom,nom,mailEtud,telEtud,libelleFiliere FROM etudiants E , filiere F WHERE E.idFiliere=F.idFiliere ; SELECT COUNT(*) as nbrs_users FROM etudiants ; SELECT COUNT(*) as nbrs_posts FROM postes ; SELECT COUNT(*) as nbrs_solutions FROM solutions ; ";
    
    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        var infosUsers = results[0];
        var nbrUsers = results[1][0].nbrs_users;
        var nbrPosts = results[2][0].nbrs_posts;
        var nbrSolutions = results[3][0].nbrs_solutions;
        console.log(infosUsers,nbrUsers,nbrPosts,nbrSolutions);
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\acceuil', { infos:infosUsers ,count1:nbrUsers,count2:nbrPosts,count3:nbrSolutions });
    });

    conn.end();
};


