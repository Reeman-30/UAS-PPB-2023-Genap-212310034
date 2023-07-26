const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // ganti dengan host MySQL Anda
  user: 'root', // ganti dengan nama pengguna MySQL Anda
  password: '', // ganti dengan kata sandi MySQL Anda
  database: 'durian', // ganti dengan nama database yang ingin Anda gunakan
});

module.exports = connection;
