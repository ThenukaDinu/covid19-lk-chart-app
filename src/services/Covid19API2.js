import axios from 'axios';

export default {
  async getConfirmedCases(fromDate, toDate) {
    return await axios.get(
      `https://api.covid19api.com/country/sri-lanka/status/confirmed?from=${fromDate}&to=${toDate}`,
      {
        crossDomain: true,
        dataType: 'json',
      }
    );
  },

  async getRecoveredCases(fromDate, toDate) {
    return await axios.get(
      `https://api.covid19api.com/country/sri-lanka/status/recovered?from=${fromDate}&to=${toDate}`,
      {
        crossDomain: true,
        dataType: 'json',
        'Access-Control-Allow-Credentials':true,
        // headers: {"Access-Control-Allow-Origin": "*"}
      }
    );
  },
};
