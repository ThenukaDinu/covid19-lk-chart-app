<template>
  <div class="totals row">
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.local_total_cases}}</h1>
      <p>Total Confirmed Cases</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.local_active_cases}}</h1>
      <p>Active Cases</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.local_new_cases}}</h1>
      <p>Daily New Cases</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.local_total_number_of_individuals_in_hospitals}}</h1>
      <p>Individuals currently under investigations in hospitals</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.local_recovered}}</h1>
      <p>Recovered & Discharged</p>
    </div>
    <div class="col text-center">
      <i class="fas fa-info-circle"></i>
      <h1>{{apiData.local_deaths}}</h1>
      <p>Deaths</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalTotalCounts",
  props: {
    apiData: {
      type: Object
    }
  }
};
</script>

<style>
</style>