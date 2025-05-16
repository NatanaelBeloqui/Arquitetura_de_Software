const axios = require('axios');
const { parseStringPromise } = require('xml2js');

const xmlRequest = `
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToDollars xmlns="http://www.dataaccess.com/webservicesserver/">
      <dNum>123.45</dNum>
    </NumberToDollars>
  </soap:Body>
</soap:Envelope>
`;

async function callNumberToDollars() {
  try {
    const response = await axios.post(
      'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      xmlRequest,
      {
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          'SOAPAction': 'http://www.dataaccess.com/webservicesserver/NumberToDollars'
        }
      }
    );

    const xmlResponse = response.data;

    const result = await parseStringPromise(xmlResponse, {
      explicitArray: false,
      ignoreAttrs: true
    });

    const dollarResult =
      result['soap:Envelope']?.['soap:Body']?.['m:NumberToDollarsResponse']?.['m:NumberToDollarsResult'] ||
      result['soap:Envelope']?.['soap:Body']?.['NumberToDollarsResponse']?.['NumberToDollarsResult'];

    if (dollarResult) {
      console.log('Valor em dólares:', dollarResult.trim());
    } else {
      console.warn('Resposta SOAP não encontrada ou mal formatada');
    }
  } catch (error) {
    console.error('Erro ao chamar o serviço SOAP:', error.message);
  }
}

callNumberToDollars();
