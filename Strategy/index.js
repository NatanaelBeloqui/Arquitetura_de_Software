const Carrinho = require("./Carrinho");
const FreteNormal = require("./FreteNormal");
const FreteExpresso = require("./FreteExpresso");
const FreteGratuito = require("./FreteGratuito");

// Usando as estratégias
const normal = new FreteNormal();
const expresso = new FreteExpresso();
const gratuito = new FreteGratuito();

const carrinho1 = new Carrinho(100, normal);
console.log('Total com frete normal: ', carrinho1.calcularTotal());

const carrinho2 = new Carrinho(100, expresso);
console.log('Total com frete expresso: ', carrinho2.calcularTotal());

const carrinho3 = new Carrinho(100, gratuito);
console.log('Total com frete gratuito: ', carrinho3.calcularTotal());