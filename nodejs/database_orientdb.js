var Oriento = require('oriento');

var server = Oriento({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'admin'
});

var db = server.use('o2');
/*
db.record.get('#22:0').then(function (record) {
  console.log('Loaded record:', record);
});
*/

// CREATE
/*
var sql = 'SELECT FROM topic';
db.query(sql).then(function(results){
  console.log(results);
});

var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
  params:{
    rid:'#22:0'
  }
};
db.query(sql, param).then(function(results){
  console.log(results);
});

// INSERT
var sql = 'INSERT INTO topic(title, description) VALUES(:title, :desc)';
db.query(sql, {
  params:{
    title:'Express',
    desc:'Express is framework for web'
  }
}).then(function(results){
  console.log(results);
});

// UPDATE
var sql = 'UPDATE topic SET title=:title WHERE @rid=:rid';
db.query(sql, {params:{title:'Expressjs', rid:'#23:0'}}).then(function(results){
  console.log(results);
});
*/

var sql = 'DELETE VERTEX topic WHERE @rid=:rid';
db.query(sql, {params:{rid:'#23:0'}}).then(function(results){
  console.log(results);
});
