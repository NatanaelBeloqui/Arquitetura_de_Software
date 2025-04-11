const db1 = require('./Database');
const db2 = require('./Database');

console.log('Conexão 1: ', db1.getConnection());
console.log('Conexão 2: ', db2.getConnection());

console.log('É a mesma instância?', db1 === db2);