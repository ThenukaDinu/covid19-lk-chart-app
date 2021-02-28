<template>
  <div>
    <canvas
      id="globalcountspiechart"
      height="300"
      aria-label="Global Counts Pie Chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "GlobalCountsPieChart",
  data() {
    return {
      labels: [],
      dataset: {
        label: "",
        data: [],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"]
      },
      chartOptions: {
        maintainAspectRatio: false,
        legend: {
          labels: {
            boxWidth: 25
          },
          position: "top"
        },
        animation: {
          duration: 2000,
          easing: "easeInOutQuad"
        }
      }
    };
  },
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Object
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
      const chartElement = document.querySelector("#globalcountspiechart");
      new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });
    },
    initiateChart() {
      const countsArr = [
        this.chartData.global_total_cases,
        this.chartData.global_new_cases,
        this.chartData.global_recovered,
        this.chartData.global_deaths
      ];

      const labelsArr = [
        "Total Confirmed Cases",
        "Daily New Cases",
        "Recovered",
        "Deaths"
      ];

      this.dataset.data = countsArr;
      this.dataset.label = this.label;

      const chartData = {
        labels: labelsArr,
        datasets: [this.dataset]
      };

      this.chartConstructor(this.chartType, chartData, this.chartOptions);
    }
  }
};
</script>
