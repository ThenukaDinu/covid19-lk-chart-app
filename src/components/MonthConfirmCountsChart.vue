<template>
  <div>
    <canvas
      id="MonthConfirmedBarChart"
      height="500"
      aria-label="Month Confirmed Bar Chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "MonthConfirmedBarChart",
  data() {
    return {
      labels: [],
      datasetCon: {
        label: "",
        data: [],
        backgroundColor: "#2b97cf"
      },
      datasetRec: {
        label: "",
        data: [],
        backgroundColor: "#62a741"
      },
      chartOptions: {
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: { display: false }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        maintainAspectRatio: false,
        legend: {
          labels: {
            boxWidth: 40
          },
          position: "top"
        },
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
    async initiateChart() {
      const datesCon = await this.arrConfirmed.map(d => d.date);
      const casesCon = await this.arrConfirmed.map(d => d.cases);
      this.datasetCon.data = await casesCon;
      this.datasetCon.label = await this.label1;

      const casesRec = await this.arrRecoverd.map(d => d.cases);
      this.datasetRec.data = await casesRec;
      this.datasetRec.label = await this.label2;

      const chartData = await {
        labels: datesCon,
        datasets: [this.datasetCon, this.datasetRec]
      };

      this.chartConstructor(this.chartType, chartData, this.chartOptions);
    }
  },
  watch: {
    arrConfirmed() {
      this.initiateChart();
    }
  }
};
</script>