var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'asrii'
});

router.get('/', function(req, res, next) {

  connnection.query(
    "SELECT * FROM matieres WHERE 1 ", function(err, row ,field){
      if(err){
          console.log(err);
          res.send({'success': false, 'message':'Impossible de se connecter a la base de donnée'});
      }

      if(row.length > 0){
        res.send(row);
      } else{
        res.send({ 'success': false, 'message': 'Utlisateur non trouvé' });

        }
    }) 
});

module.exports = router;
