<template>
  <div>
    <canvas id="myChart" width="400" height="400"></canvas>
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
        lineTension: 0,
        pointBackgroundColor: "#5cddff"
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
                stepSize: 20
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
      const chartElement = document.querySelector("canvas");
      const chart = new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });

      console.log(chart);
    },
    initiateChart() {
      const dates = this.chartData
        .reverse()
        .slice(0, 30)
        .map(d => d.date)
        .reverse();
      const totals = this.chartData
        .reverse()
        .slice(0, 30)
        .map(d => d.count)
        .reverse();

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
