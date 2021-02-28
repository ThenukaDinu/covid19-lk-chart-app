<template>
  <div class="totals row">
    <div class="col text-center">
      <span class="text-primary">
        <h1>
          <i class="fa fa-check-circle"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.local_total_cases" />
        </h1>
      </span>
      <p>Total Confirmed Cases</p>
    </div>
    <div class="col text-center">
      <span class="text-warning">
        <h1>
          <i class="fa fa-exclamation-triangle"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.local_active_cases" />
        </h1>
      </span>
      <p>Active Cases</p>
    </div>
    <div class="col text-center">
      <span class="text-secondary">
        <h1>
          <i class="fa fa-arrow-circle-up"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.local_new_cases" />
        </h1>
      </span>
      <p>Daily New Cases</p>
    </div>
    <div class="col text-center">
      <span class="text-info">
        <h1>
          <i class="fa fa-eye "></i>
        </h1>
        <h1>
          <animated-counter
            :value="apiData.local_total_number_of_individuals_in_hospitals"
          />
        </h1>
      </span>
      <p>Individuals currently under investigations in hospitals</p>
    </div>
    <div class="col text-center">
      <span class="text-success">
        <h1>
          <i class="fa fa-heartbeat"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.local_recovered" />
        </h1>
      </span>
      <p>Recovered & Discharged</p>
    </div>
    <div class="col text-center">
      <span class="text-danger">
        <h1>
          <i class="fa fa-bed"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.local_deaths" />
        </h1>
      </span>
      <p>Deaths</p>
    </div>
  </div>
</template>

<script>
import AnimatedCounter from '../components/AnimatedCounter';
export default {
  name: 'LocalTotalCounts',
  props: {
    apiData: {
      type: Object,
    },
  },
  components: {
    AnimatedCounter,
  },
};
</script>

<style></style>
