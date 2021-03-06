<template>
  <div>
    <canvas
      id="MonthConfirmedBarChart"
      height="400"
      aria-label="Month Confirmed Bar Chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import moment from "moment";
export default {
  name: "MonthConfirmedBarChart",
  data() {
    return {
      labels: [],
      datasetCon: {
        label: "",
        data: [],
        backgroundColor: "#8ed26d"
      },
      datasetRec: {
        label: "",
        data: [],
        backgroundColor: "#4fa2cd"
      },
      chartOptions: {
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: { display: true }
            }
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 0
              }
            }
          ]
        },
        maintainAspectRatio: false,
        legend: {
          labels: {
            boxWidth: 10
          },
          position: "top"
        },
        fill: false,
        animation: {
          duration: 2000,
          easing: "easeInOutQuart"
        }
      }
    };
  },
  props: {
    label1: {
      type: String
    },
    label2: {
      type: String
    },
    arrRecoverd: {
      type: Array
    },
    arrConfirmed: {
      type: Array
    },
    chartType: {
      type: String
    }
  },
  mounted() {
    this.initiateChart();
  },
  methods: {
    chartConstructor(chartType, chartData, chartOptions) {
      const chartElement = document.querySelector("#MonthConfirmedBarChart");
      new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });
    },
    initiateChart() {
      const datesCon = this.arrConfirmed.map(d =>
        moment(d.Date).format("yyyy-MM-DD")
      );
      const casesCon = this.arrConfirmed.map(d => d.Cases);

      this.datasetCon.data = casesCon;
      this.datasetCon.label = this.label1;

      //     const datesRec = this.arrConfirmed.map(d =>
      //     moment(d.Date).format("yyyy-MM-DD")
      //   );
      const casesRec = this.arrRecoverd.map(d => d.Cases);

      this.datasetRec.data = casesRec;
      this.datasetRec.label = this.label2;

      const chartData = {
        labels: datesCon,
        datasets: [this.datasetCon, this.datasetRec]
      };

      this.chartConstructor(this.chartType, chartData, this.chartOptions);
    }
  }
};
</script>