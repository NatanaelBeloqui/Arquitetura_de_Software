const axios = require('axios');
const { parseStringPromise } = require('xml2js');
 
const xmlRequest = `
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
      <ubiNum>25</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>
`;
 
async function callSoapService() {
  try {
    const response = await axios.post(
      'https://www.dataaccess.com/webservicesserver/NumberConversion.wso',
      xmlRequest,
      {
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          'SOAPAction': 'http://www.dataaccess.com/webservicesserver/NumberToWords'
        }
      }
    );
 
    const xmlResponse = response.data;
 
    const result = await parseStringPromise(xmlResponse, {
      explicitArray: false,
      ignoreAttrs: true
    });
 
    // Veja a estrutura convertida para JSON
    console.log(JSON.stringify(result, null, 2));
 
    // Caminho seguro para acessar a resposta
    const wordResult =
      result['soap:Envelope']?.['soap:Body']?.['m:NumberToWordsResponse']?.['m:NumberToWordsResult'] ||
      result['soap:Envelope']?.['soap:Body']?.['NumberToWordsResponse']?.['NumberToWordsResult'];
 
    if (wordResult) {
      console.log('Resultado em texto:', wordResult.trim());
    } else {
      console.warn('Resposta SOAP não encontrada ou mal formatada');
    }
  } catch (error) {
    console.error('Erro ao chamar o serviço SOAP:', error.message);
  }
}

callSoapService();