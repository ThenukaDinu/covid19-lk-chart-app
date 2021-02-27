<template>
  <div id="app">
    <NavBar />
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    Home,
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Roboto;
}
</style>
