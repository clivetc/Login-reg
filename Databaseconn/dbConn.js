var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', // host name
  user: 'root',      // database username
  password: 'Samaita89.',      // database password
  database: 'whats_africa', // // database Name
  port:'3306',// portnumber
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;