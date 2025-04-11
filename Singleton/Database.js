class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance; // Impede multiplas instâncias
        }
        console.log('Criando uma nova conexão com o DB...');
        this.connection = this.#connect();
        Database.instance = this;
    }

    #connect() {
        // Simula conexão com o BD
        return {
            status: 'Conectado',
            timestamp: new Date()
        };
    }

    getConnection() {
        return this.connection;
    }
}

module.exports = new Database(); // Exporta sempre a mesma instância