const Carrinho = require("./Carrinho");
const FreteNormal = require("./FreteNormal");
const FreteExpresso = require("./FreteExpresso");
const FreteGratuito = require("./FreteGratuito");

// Usando as estratégias
const normal = new FreteNormal();
const expresso = new FreteExpresso();
const gratuito = new FreteGratuito();