<template>
  <div>
    <canvas
      id="DailyPCRTestsBarChart"
      height="400"
      aria-label="Daily PCR Tests Bar Chart"
      role="img"
    >Your browser does not support the canvas element.</canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "DailyPCRTestsBarChart",
  data() {
    return {
      labels: [],
      dataset: {
        label: "",
        data: [],
        backgroundColor: []
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
                stepSize: 1000
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
      const chartElement = document.querySelector("#DailyPCRTestsBarChart");
      new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
      });
    },
    initiateChart() {
      const dates = this.chartData
        .slice(Math.max(this.chartData.length - 30, 0))
        .map(d => d.date);
      const totals = this.chartData
        .slice(Math.max(this.chartData.length - 30, 0))
        .map(d => d.count);

      this.dataset.data = totals;
      this.dataset.label = this.label;

      for (let i = 0; i < this.dataset.data.length; i++) {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        this.dataset.backgroundColor.push(`#${randomColor}`);
      }

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
