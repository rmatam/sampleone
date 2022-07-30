var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "Insert into customers (name , address ) values ('Company Inc','Highway 37')";
  con.query(sql, function( err,result){
    if(err) throw err;
    console.log("1 Record Inserted");
  });
});