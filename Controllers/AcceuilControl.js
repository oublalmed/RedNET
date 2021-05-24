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

    var sql = "SELECT idEtudiant,prénom,nom,mailEtud,telEtud,libelleFiliere FROM etudiants E , filiere F WHERE E.idFiliere=F.idFiliere ; SELECT COUNT(*) as nbrs_users FROM etudiants ; SELECT COUNT(*) as nbrs_posts FROM postes ; SELECT COUNT(*) as nbrs_solutions FROM solutions ; SELECT COUNT(*) as nbrs_fichiers FROM fichiers ; ";
    
    conn.query(sql, function (error, results) {
        if (error) {
            throw error;
        }
        var infosUsers = results[0];
        var nbrUsers = results[1][0].nbrs_users;
        var nbrPosts = results[2][0].nbrs_posts;
        var nbrSolutions = results[3][0].nbrs_solutions;
        var nbrFichiers = results[4][0].nbrs_fichiers;
        console.log(infosUsers,nbrUsers,nbrPosts,nbrSolutions,nbrFichiers);
        res.render('C:\\Users\\Hp\\VsCode-Projects\\1PFA\\Views\\Admin\\acceuil', { infos:infosUsers ,count1:nbrUsers,count2:nbrPosts,count3:nbrSolutions,count4:nbrFichiers });
    });

};

exports.filiere = (req, res) => {

    var sql = "SELECT COUNT(*) as is_IWIM FROM etudiants where idFiliere = 1 ; SELECT COUNT(*) as is_GL FROM etudiants  where idFiliere = 3 ; SELECT COUNT(*) as is_IA FROM etudiants  where idFiliere = 4 ; SELECT COUNT(*) as is_BI FROM etudiants  where idFiliere = 2 ;SELECT COUNT(*) as is_SSI FROM etudiants  where idFiliere = 8 ; SELECT COUNT(*) as is_EL FROM etudiants  where idFiliere = 6 ; SELECT COUNT(*) as is_ISEM FROM etudiants e where idFiliere = 7 ; SELECT COUNT(*) as is_IDF FROM etudiants  where idFiliere = 5 ;";
    
    conn.query(sql, function (error, rows) {
        if (error) {
            throw error;
        }
        var IWIM = rows[0][0].is_IWIM;
        var GL = rows[1][0].is_GL;
        var IA = rows[2][0].is_IA;
        var BI = rows[3][0].is_BI;
        var SSI = rows[4][0].is_SSI;
        var EL = rows[5][0].is_EL;
        var ISEM = rows[6][0].is_ISEM;
        var IDF = rows[7][0].is_IDF;
        console.log(IWIM,GL,IA,BI,SSI,EL,ISEM,IDF);
        res.redirect('/acceuil', { count11:IWIM ,count22:GL,count33:IA,count44:BI ,count55:SSI ,count66:EL,count77:ISEM,count88:IDF });
    });

};


