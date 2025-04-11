const PizzaFactory = require('./PizzaFactory');

const pedido1 = PizzaFactory.criarPizza('calabresa');
pedido1.preparar();

const pedido2 = PizzaFactory.criarPizza('mussarela');
pedido2.preparar();

const pedido3 = PizzaFactory.criarPizza('frango');
pedido3.preparar();