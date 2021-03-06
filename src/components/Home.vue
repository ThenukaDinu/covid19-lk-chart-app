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
      <div class="chatset my-5">
        <div v-if="apiData" class="row">
          <div class="col-md-4 border p-3">
            <h4 class="text-center mt-3 mb-2">Total Counts LK</h4>
            <l-k-counts-pie-chart
              :chartData="apiData"
              :label="'SL Total Counts'"
              :chartType="'pie'"
            ></l-k-counts-pie-chart>
          </div>
          <div class="col-md-4 border p-3">
            <h4 class="text-center mt-3 mb-2">Daily PCR Tests</h4>
            <daily-recoveries-l-k-barchart
              v-if="arrDailyPCRTests.length > 0"
              :chartData="arrDailyPCRTests"
              :label="'Daily PCR Tests'"
              :chartType="'bar'"
            ></daily-recoveries-l-k-barchart>
          </div>
          <div class="col-md-4 border p-3">
            <h4 class="text-center mt-3 mb-2">Total Counts Global</h4>
            <global-counts-pie-chart
              :chartData="apiData"
              :label="'SL Total Counts'"
              :chartType="'pie'"
            ></global-counts-pie-chart>
          </div>
        </div>
        <div v-else>
          <ChartSkeleton />
        </div>
      </div>

      <div class="chartset">
        <div class="py-4">
          <div class="row">
            <div class="col-md-6 border p-3">
              <h4 class="text-center mb-3">Confirmed vs Recovered</h4>
              <month-confirm-counts-chart
                v-if="arrConfirmed.length > 0 && arrRecoverd.length > 0"
                :chartType="'bar'"
                :arrRecoverd="arrRecoverd"
                :arrConfirmed="arrConfirmed"
                :label1="'Confirmed Cases LK'"
                :label2="'Recovered Cases LK'"
              ></month-confirm-counts-chart>
              <div v-else>
                <ChartSkeleton />
              </div>
            </div>
            <div class="col-md-6 border p-3">
              <h4 class="text-center mb-3">Confirmed vs Deaths</h4>
              <month-death-counts-chat
                v-if="arrDeaths.length > 0 && arrConfirmed.length > 0"
                :chartType="'line'"
                :arrDeaths="arrDeaths"
                :arrConfirmed="arrConfirmed"
                :label1="'Confirmed Cases LK'"
                :label2="'Death Cases LK'"
              ></month-death-counts-chat>
              <div v-else>
                <ChartSkeleton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chartset">
        <div class="row my-5 border py-3 px-2" v-if="arrDailyPCRTests.length > 0">
          <div class="col">
            <h3 class="text-center">Daily PCR Tests</h3>
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
      </div>-->
    </div>
  </div>
</template>

<script>
// import DailyPcrTestsBarChart from "../components/DailyPcrTestsBarChart";
import covid19API from "../services/covid19API";
import ChartSkeleton from "../components/ChartSkeleton";
import TextSkeleton from "../components/TextSkeleton";
import DailyPcrTestsLineChart from "../components/DailyPcrTestsLineChart";
import LocalTotalCounts from "../components/LocalTotalCounts";
import GlobalTotalCounts from "../components/GlobalTotalCounts";
import LKCountsPieChart from "../components/LKCountsPieChart";
import GlobalCountsPieChart from "../components/GlobalCountsPieChart";
import DailyRecoveriesLKBarchart from "../components/DailyRecoveriesLKBarchart";
import moment from "moment";
import covid19API2 from "../services/Covid19API2";
import MonthConfirmCountsChart from "../components/MonthConfirmCountsChart";
import MonthDeathCountsChat from "../components/MonthDeathCountsChat";

export default {
  name: "Home",
  data() {
    return {
      apiData: null,
      arrRecoverd: [],
      arrConfirmed: [],
      arrDeaths: [],
      arrDailyPCRTests: [],
      arrHospitalData: [],
      global: false
    };
  },
  watch: {
    startDate(startDate) {
      this.endDate = moment(startDate)
        .add(2, "weeks")
        .format("yyyy-MM-DD");
      this.fetchAPI2();
    }
  },
  components: {
    // DailyPcrTestsBarChart,
    DailyPcrTestsLineChart,
    ChartSkeleton,
    LocalTotalCounts,
    TextSkeleton,
    GlobalTotalCounts,
    LKCountsPieChart,
    GlobalCountsPieChart,
    DailyRecoveriesLKBarchart,
    MonthConfirmCountsChart,
    MonthDeathCountsChat
  },
  methods: {
    async fetchAPI1() {
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
    },
    async fetchAPI2() {
      try {
        const response = await covid19API2.getLocalByDays(14);
        const { cases, deaths, recovered } = await response.data.timeline;
        if (response.status === 200) {
          for (const key of Object.keys(cases)) {
            let newObj = {
              date: moment(key).format("yyyy-MM-DD"),
              cases: cases[key]
            };
            this.arrConfirmed.push(newObj);
          }

          for (const key of Object.keys(deaths)) {
            let newObj = {
              date: moment(key).format("yyyy-MM-DD"),
              cases: deaths[key]
            };
            this.arrDeaths.push(newObj);
          }

          for (const key of Object.keys(recovered)) {
            let newObj = {
              date: moment(key).format("yyyy-MM-DD"),
              cases: recovered[key]
            };
            this.arrRecoverd.push(newObj);
          }
        } else {
          this.emptyArrys();
        }
      } catch (error) {
        console.log(error);
        this.emptyArrys();
      }
    },

    emptyArrys() {
      this.arrRecoverd.length = 0;
      this.arrDeaths.length = 0;
      this.arrConfirmed.length = 0;
    }
  },

  created() {
    this.fetchAPI1();
    this.fetchAPI2();
  }
};
</script>

<style scoped lang="css">
.my-container {
  padding: 2% 5%;
  background: rgb(250, 250, 250);
}
</style>
