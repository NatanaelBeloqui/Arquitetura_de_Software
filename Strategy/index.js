const Carrinho = require("./Carrinho");
const FreteNormal = require("./FreteNormal");
const FreteExpresso = require("./FreteExpresso");
const FreteGratuito = require("./FreteGratuito");

// Usando as estratégias
const normal = new FreteNormal();
const expresso = new FreteExpresso();
const gratuito = new FreteGratuito();

const carrinho = new Carrinho(100, normal);
console.log('Total com frete normal: ', carrinho.calcularTotal());