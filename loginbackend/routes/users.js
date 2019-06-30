var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'asrii'
});

router.post('/', function(req, res, next) {

  var email = req.body.email;
  var password = req.body.password;

  connnection.query(
    "SELECT * FROM utilisateurs WHERE email = ? AND mdp = ?",
    [email, password], function(err, row ,field){
      if(err){
          console.log(err);
          res.send({'success': false, 'message':'Impossible de se connecter a la base de donnée'});
      }

      if(row.length > 0){
        res.send({ 'success': true, 'user': row[0].email });
      } else{
        res.send({ 'success': false, 'message': 'Utlisateur non trouvé' });

        }
    }) 
});

module.exports = router;
