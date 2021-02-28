<template>
  <div class="totals row">
    <div class="col text-center">
      <span class="text-primary">
        <h1>
          <i class="fa fa-globe"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.global_total_cases" />
        </h1>
      </span>
      <p>Total Confirmed Cases</p>
    </div>
    <div class="col text-center">
      <span class="text-warning">
        <h1>
          <i class="fa fa-external-link-square"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.global_new_cases" />
        </h1>
      </span>
      <p>Daily New Cases</p>
    </div>
    <div class="col text-center">
      <span class="text-success">
        <h1>
          <i class="fa fa-heartbeat "></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.global_recovered" />
        </h1>
      </span>
      <p>Recovered</p>
    </div>
    <div class="col text-center">
      <span class="text-danger">
        <h1>
          <i class="fa fa-bed"></i>
        </h1>
        <h1>
          <animated-counter :value="apiData.global_deaths" />
        </h1>
      </span>
      <p>Deaths</p>
    </div>
  </div>
</template>

<script>
import AnimatedCounter from '../components/AnimatedCounter';
export default {
  name: 'GlobalTotalCounts',
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
