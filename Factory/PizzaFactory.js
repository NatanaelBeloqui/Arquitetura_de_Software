const PizzaCalabresa = require('./Calabresa');
const PizzaMussarela = require('./Mussarela');

class PizzaFactory {

    static criarPizza(tipo) {
        switch(tipo) {
            case 'calabresa' : return new PizzaCalabresa();
            case 'mussarela' : return new PizzaMussarela();
            default: throw new Error('Tipo de Pizza desconhecido');
        }
    }
}

module.exports = PizzaFactory;