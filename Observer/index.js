const Canal = require('./Canal');
const Usuario = require('./Usuario');

const canal = new Canal();

const usar1 = new Usuario('Alice');
const usar2 = new Usuario('Bob');
const usar3 = new Usuario('Carla');

canal.inscrever(usar1);
canal.inscrever(usar2);
canal.inscrever(usar3);

console.log();

canal.publicar('Design Patterns na prática');

console.log();

// Desinscrever usuario
canal.desinscreve(usar2);
canal.publicar('Novo videa sobre Node.js');

console.log();
