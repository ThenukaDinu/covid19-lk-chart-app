import axios from 'axios';

export default {
  async getConfirmedCases(fromDate, toDate) {
    return await axios.get(
      `https://api.covid19api.com/country/sri-lanka/status/confirmed?from=${fromDate}&to=${toDate}`,
      {
        crossDomain: true,
        dataType: 'application/json',
        'Access-Control-Allow-Credentials': true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      }
    );
  },

  async getRecoveredCases(fromDate, toDate) {
    return await axios.get(
      `https://api.covid19api.com/country/sri-lanka/status/recovered?from=${fromDate}&to=${toDate}`,
      {
        crossDomain: true,
        dataType: 'application/json',
        'Access-Control-Allow-Credentials': true,
        headers: { 'Access-Control-Allow-Origin': '*' },
      }
    );
  },
};

///https://covid-19-data.p.rapidapi.com/totals'
