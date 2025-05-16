const soap = require('strong-soap').soap;

const url = 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso?WSDL';

const requestArgs = {
    ubiNum: 444
};

const options = {};

soap.createClient(url, options, (err, client) => {
    if (err) {
        console.error('Erro ao criar cliente SOAP: ', err);
        return;
    }
    client.NumberToWords(requestArgs, (err, result) => {
        if(err) {
            console.log('Erro na chamada SOAP: ', err);
            return;
        }
        console.log('Resultado', result.NumberToWordsResult);
    });

});
