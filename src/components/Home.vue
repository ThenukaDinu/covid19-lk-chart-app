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
      <div class="chatset">
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
            <GlobalCountsPieChart
              :chartData="apiData"
              :label="'SL Total Counts'"
              :chartType="'pie'"
            ></GlobalCountsPieChart>
          </div>
        </div>
        <div v-else>
          <ChartSkeleton />
        </div>
      </div>

      <div class="chartset">
        <div class="mb-3 mt-3">
          <b-form class="row mb-4">
            <div class="col-md-6">
              <label class="font-weight-bold">From Date</label>
              <b-form-datepicker
                v-model="startDate"
                class="mb-2"
                :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
                menu-class="w-100"
                calendar-width="100%"
              ></b-form-datepicker>
            </div>
            <div class="col-md-6">
              <label class="font-weight-bold">To Date</label>
              <b-form-datepicker
                v-model="endDate"
                class="mb-2"
                disabled
                :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"
                menu-class="w-100"
                calendar-width="100%"
              ></b-form-datepicker>
            </div>
          </b-form>
          <div class="row">
            <div class="col-md-6">
              <MonthConfirmCountsChart
                v-if="arrConfirmed.length > 0 && arrRecoverd.length > 0"
                :chartType="'line'"
                :arrRecoverd="arrRecoverd"
                :arrConfirmed="arrConfirmed"
                :label1="'Confirmed Cases LK'"
                :label2="'Recovered Cases LK'"
              ></MonthConfirmCountsChart>
              <div v-else>
                <ChartSkeleton />
              </div>
            </div>
            <div class="col-md-6">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis consequuntur! Nostrum corrupti enim sit, magnam optio animi eum repudiandae eos officia dolore laborum beatae quas suscipit minus dolor quidem, dicta ab consequuntur molestias, doloribus labore. Doloribus culpa, officia quia unde velit tempore ratione, perferendis numquam neque voluptates, quibusdam ipsam.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="chartset">
        <div class="row my-5" v-if="arrDailyPCRTests.length > 0">
          <div class="col">
            <h3>Daily PCR Tests</h3>
            <daily-pcr-tests-line-chart
              :chartData="arrDailyPCRTests"
              :label="'Daily PCR Tests'"
              :chartType="'bar'"
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
import moment from "moment";
import covid19API2 from "../services/Covid19API2";
import MonthConfirmCountsChart from "../components/MonthConfirmCountsChart";

export default {
  name: "Home",
  data() {
    return {
      apiData: null,
      arrRecoverd: [],
      arrConfirmed: [],
      arrDailyPCRTests: [],
      arrHospitalData: [],
      global: false,
      startDate: moment()
        .add(-1, "months")
        .format("yyyy-MM-DD"),
      endDate: moment().format("yyyy-MM-DD")
    };
  },
  watch: {
    startDate(startDate) {
      this.endDate = moment(startDate)
        .add(1, "months")
        .format("yyyy-MM-DD");
      this.fetchAPI2();
    }
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
    DailyRecoveriesLKBarchart,
    MonthConfirmCountsChart
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
        const confirmed = await covid19API2.getConfirmedCases(
          this.startDate,
          this.endDate
        );
        confirmed.status === 200
          ? (this.arrConfirmed = await confirmed.data)
          : (this.arrConfirmed = null);

        const recovered = await covid19API2.getRecoveredCases(
          this.startDate,
          this.endDate
        );
        recovered.status === 200
          ? (this.arrRecoverd = await recovered.data)
          : (this.arrRecoverd = null);
      } catch (error) {
        this.arrRecoverd = null;
        console.log(error);
      }
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
