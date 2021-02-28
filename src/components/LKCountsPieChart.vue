<template>
  <div>
    <canvas
      id="lkcountspiechart"
      height="350"
      aria-label="LK Counts Pie Chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "LKCountsPieChart",
  data() {
    return {
      labels: [],
      dataset: {
        label: "",
        data: [],
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#28f3a9"]
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
      const chartElement = document.querySelector("#lkcountspiechart");
      new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });
    },
    initiateChart() {
      const countsArr = [
        this.chartData.local_total_cases,
        this.chartData.local_active_cases,
        this.chartData.local_new_cases,
        this.chartData.local_total_number_of_individuals_in_hospitals,
        this.chartData.local_recovered,
        this.chartData.local_deaths
      ];

      const labelsArr = [
        "Total Confirmed Cases",
        "Active Cases",
        "Daily New Cases",
        "Individuals currently under investigations in hospitals",
        "Recovered & Discharged",
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
