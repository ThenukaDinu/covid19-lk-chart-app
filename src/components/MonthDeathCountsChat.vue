<template>
  <div>
    <canvas
      id="MonthDeathBarChart"
      height="500"
      aria-label="Month Death Bar Chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "MonthDeathBarChart",
  data() {
    return {
      labels: [],
      datasetCon: {
        label: "",
        data: [],
        backgroundColor: "#58508d",
        borderColor: "#58508d",
        lineTension: 0.5,
        pointBackgroundColor: "blue",
        pointStyle: "rectRounded",
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHitRadius: 30,
        pointBorderWidth: 2,
        fill: false
      },
      datasetDeaths: {
        label: "",
        data: [],
        backgroundColor: "#ff6361",
        borderColor: "#ff6361",
        lineTension: 0.5,
        pointBackgroundColor: "red",
        pointStyle: "rectRounded",
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHitRadius: 30,
        pointBorderWidth: 2,
        fill: false
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
                // stepSize: 1
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
    arrDeaths: {
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
      const chartElement = document.querySelector("#MonthDeathBarChart");
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

      const casesDeath = await this.arrDeaths.map(d => d.cases);
      this.datasetDeaths.data = await casesDeath;
      this.datasetDeaths.label = await this.label2;

      const chartData = {
        labels: datesCon,
        datasets: [this.datasetCon, this.datasetDeaths]
      };

      this.chartConstructor(this.chartType, chartData, this.chartOptions);
      //   console.log(this.arrDeaths, this.arrConfirmed);
    }
  },
  watch: {
    arrConfirmed() {
      this.initiateChart();
    }
  }
};
</script>