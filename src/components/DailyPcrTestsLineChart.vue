<template>
  <div>
    <canvas
      id="DailyPcrTestsLineChart"
      height="400"
      aria-label="Daily PCR Tests Line Chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "DailyPcrTestsLineChart",
  data() {
    return {
      labels: [],
      dataset: {
        label: "",
        data: [],
        backgroundColor: "rgba(224, 248, 255, 0.4)",
        borderColor: "#5cddff",
        lineTension: 0.5,
        pointBackgroundColor: "cyan",
        pointStyle: "rectRounded",
        pointRadius: 5,
        pointHoverRadius: 10,
        pointHitRadius: 30,
        pointBorderWidth: 2,
        fill: true
      },
      chartOptions: {
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
            boxWidth: 30
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
      const chartElement = document.querySelector("#DailyPcrTestsLineChart");
      new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });
    },
    initiateChart() {
      const dates = this.chartData
        .slice(Math.max(this.chartData.length - 31, 0))
        .map(d => d.date);
      const totals = this.chartData
        .slice(Math.max(this.chartData.length - 31, 0))
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
