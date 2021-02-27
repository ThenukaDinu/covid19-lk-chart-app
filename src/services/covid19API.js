import axios from 'axios';

export default {
  async getCovid19Data() {
    return await axios.get(
      'https://hpb.health.gov.lk/api/get-current-statistical'
    );
  },
};
