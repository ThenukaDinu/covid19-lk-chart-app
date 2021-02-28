<template>
  <div class="totals row">
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.global_total_cases}}</h1>
      <p>Total Confirmed Cases</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.global_new_cases}}</h1>
      <p>Daily New Cases</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.global_recovered}}</h1>
      <p>Recovered</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.global_deaths}}</h1>
      <p>Deaths</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.global_new_deaths}}</h1>
      <p>Daily New Deaths</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalTotalCounts",
  props: {
    apiData: {
      type: Object
    }
  }
};
</script>

<style>
</style>