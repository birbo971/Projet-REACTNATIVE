var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asrii'
});

router.get('/', function (req, res, next) {

    connnection.query(
        "SELECT notes,nom,prenom FROM notes,utilisateurs WHERE notes.id_enseignant = utilisateurs.id_users AND notes.id_etudiant = 1 ", function (err, row, field) {
            if (err) {
                console.log(err);
                res.send({ 'success': false, 'message': 'Impossible de se connecter a la base de donnée' });
            }

            if (row.length > 0) {
                res.send(row);
            } else {
                res.send({ 'success': false, 'message': 'Résultat non trouvé' });

            }
        })
});

module.exports = router;
