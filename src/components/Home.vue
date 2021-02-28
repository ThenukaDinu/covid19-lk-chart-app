<template>
  <div class="my-container">
    <div class="main-content">
      <div class="text-center mb-5">
        <div>
          <h5>
            Last Updated:
            <span class="text-info" v-if="apiData">
              {{
              moment(apiData.update_date_time).format('YYYY-MM-DD h:mm a')
              }}
            </span>
          </h5>
        </div>
        <div>
          <b-form-checkbox switch size="lg" v-model="global">Local/Global</b-form-checkbox>
        </div>
      </div>
      <div v-if="apiData">
        <local-total-counts :apiData="apiData" v-if="!global" />
        <global-total-counts :apiData="apiData" v-if="global" />
      </div>
      <div v-else>
        <text-skeleton />
      </div>
    </div>
    <div class="charts">
      <div v-if="apiData" class="row mb-5 mt-1">
        <div class="col-md-4 border">
          <h4 class="text-center mt-3 mb-2">Total Counts LK</h4>
          <LKCountsPieChart :chartData="apiData" :label="'SL Total Counts'" :chartType="'pie'"></LKCountsPieChart>
        </div>
        <div class="col-md-4 border">
          <h4 class="text-center mt-3 mb-2">Daily PCR Tests</h4>
          <DailyRecoveriesLKBarchart
            v-if="arrDailyPCRTests.length > 0"
            :chartData="arrDailyPCRTests"
            :label="'Daily PCR Tests'"
            :chartType="'bar'"
          ></DailyRecoveriesLKBarchart>
        </div>
        <div class="col-md-4 border">
          <h4 class="text-center mt-3 mb-2">Total Counts Global</h4>
          <GlobalCountsPieChart :chartData="apiData" :label="'SL Total Counts'" :chartType="'pie'"></GlobalCountsPieChart>
        </div>
      </div>
      <div v-else>
        <ChartSkeleton />
      </div>
      <div class="row my-5" v-if="arrDailyPCRTests.length > 0">
        <div class="col">
          <h3>Daily PCR Tests</h3>
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
      <!-- <div class="row my-5" v-if="arrDailyPCRTests.length > 0">
        <div class="col">
          <h3>Daily PCR Tests</h3>
          <daily-pcr-tests-bar-chart
            :chartData="arrDailyPCRTests"
            :label="'Daily PCR Tests'"
            :chartType="'bar'"
          ></daily-pcr-tests-bar-chart>
        </div>
      </div>
      <div v-else>
        <ChartSkeleton />
      </div> -->
    </div>
  </div>
</template>

<script>
import covid19API from "../services/covid19API";
import ChartSkeleton from "../components/ChartSkeleton";
import TextSkeleton from "../components/TextSkeleton";
import DailyPcrTestsLineChart from "../components/DailyPcrTestsLineChart";
// import DailyPcrTestsBarChart from "../components/DailyPcrTestsBarChart";
import LocalTotalCounts from "../components/LocalTotalCounts";
import GlobalTotalCounts from "../components/GlobalTotalCounts";
import LKCountsPieChart from "../components/LKCountsPieChart";
import GlobalCountsPieChart from "../components/GlobalCountsPieChart";
import DailyRecoveriesLKBarchart from "../components/DailyRecoveriesLKBarchart";

export default {
  name: "Home",
  data() {
    return {
      apiData: null,
      arrDailyPCRTests: [],
      arrHospitalData: [],
      global: false
    };
  },
  components: {
    DailyPcrTestsLineChart,
    // DailyPcrTestsBarChart,
    ChartSkeleton,
    LocalTotalCounts,
    TextSkeleton,
    GlobalTotalCounts,
    LKCountsPieChart,
    GlobalCountsPieChart,
    DailyRecoveriesLKBarchart
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
  }
};
</script>

<style scoped lang="css">
.my-container {
  padding: 2% 5%;
  background: rgb(250, 250, 250);
}
</style>
