import axios from 'axios';

export default {
  async getLocalByDays(days) {
    return await axios.get(
      `https://disease.sh/v3/covid-19/historical/lk?lastdays=${days}`
    );
  },
};