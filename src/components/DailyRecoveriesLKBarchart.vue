<template>
  <div>
    <canvas
      id="DailyRecoveriesLKBarchart"
      height="300"
      aria-label="Daily Recoveries LKBar chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "DailyRecoveriesLKBarchart",
  data() {
    return {
      labels: [],
      dataset: {
        label: "",
        data: [],
        backgroundColor: "#8ed26d"
      },
      chartOptions: {
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: { display: false }
            }
          ],
          yAxes: [
            {
              ticks: {
                 beginAtZero: true
              }
              // stacked: true
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
        animation: {
          duration: 2000,
          easing: "easeInOutQuart"
        }
      }
    };
  },
  props: {
    label: {
      type: String
    },
    chartData: {
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
      const chartElement = document.querySelector("#DailyRecoveriesLKBarchart");
      new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });
    },
    initiateChart() {
      const dates = this.chartData
        .slice(Math.max(this.chartData.length - 14, 0))
        .map(d => d.date);
      const totals = this.chartData
        .slice(Math.max(this.chartData.length - 14, 0))
        .map(d => d.count);

      this.dataset.data = totals;
      this.dataset.label = this.label;

      const chartData = {
        labels: dates,
        datasets: [this.dataset]
      };

      this.chartConstructor(this.chartType, chartData, this.chartOptions);
    }
  }
};
</script>

<style></style>
