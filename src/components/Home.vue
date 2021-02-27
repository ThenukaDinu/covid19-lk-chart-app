<template>
  <div>
    <div class="container">
      <div class="row my-5" v-if="arrDailyPCRTests.length > 0">
        <div class="col">
          <h2>Daily PCR Tests</h2>
          <daily-pcr-tests-line-chart
            :chartData="arrDailyPCRTests"
            :label="'Daily PCR Tests'"
            :chartType="'line'"
          ></daily-pcr-tests-line-chart>
        </div>
      </div>
      <div v-else>
        <ChartSkeleton />
      </div>
      <div class="row my-5" v-if="arrDailyPCRTests.length > 0">
        <div class="col">
          <h2>Daily PCR Tests</h2>
          <daily-pcr-tests-bar-chart
            :chartData="arrDailyPCRTests"
            :label="'Daily PCR Tests'"
            :chartType="'bar'"
          ></daily-pcr-tests-bar-chart>
        </div>
      </div>
      <div v-else>
        <ChartSkeleton />
      </div>
    </div>
  </div>
</template>

<script>
import covid19API from "../services/covid19API";
import ChartSkeleton from "../components/ChartSkeleton";
import DailyPcrTestsLineChart from "../components/DailyPcrTestsLineChart";
import DailyPcrTestsBarChart from "../components/DailyPcrTestsBarChart";
export default {
  name: "Home",
  data() {
    return {
      apiData: {},
      arrDailyPCRTests: [],
      arrHospitalData: []
    };
  },
  components: {
    DailyPcrTestsLineChart,
    DailyPcrTestsBarChart,
    ChartSkeleton
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await covid19API.getCovid19Data();
        const { daily_pcr_testing_data, hospital_data } = await data.data;
        if (data.success) {
          this.apiData = await data.data;
          this.arrDailyPCRTests = await daily_pcr_testing_data;
          this.arrHospitalData = await hospital_data;
        } else {
          this.apiData = null;
        }
      } catch (error) {
        this.apiData = null;
        console.log(error);
      }
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {}
};
</script>

<style scoped lang="css">
</style>
