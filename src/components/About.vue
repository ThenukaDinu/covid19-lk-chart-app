<template>
  <div class="about-page">
    <div class="text-center pt-5 mb-5 text-white">
      <div class="container my-5">
        <h1 class="pb-5">About Page</h1>
        <h2 class="mb-5 text-white">Covid 19 Dashboard</h2>
        <p class="py-4 text-white">Thanks for checking out...</p>
        <h4 class="text-white mt-4 mb-2">Check out my other apps</h4>
        <br>
        <b-list-group style="max-width: 700px; margin: 0 auto">
          <b-list-group-item href="https://movieman.netlify.app/" variant="dark">React Movie App</b-list-group-item>
          <b-list-group-item href="https://movieman2.netlify.app/" variant="dark">Vue Movie App</b-list-group-item>
          <b-list-group-item href="https://todosongo.netlify.app/" variant="dark">Vue Todo APP</b-list-group-item>
          <b-list-group-item href="https://gifhome.herokuapp.com/index.html" variant="dark">GIF Search APP</b-list-group-item>
          <b-list-group-item href="https://freemusicplayer.herokuapp.com/index.html" variant="dark">Online Music Player</b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<style scoped>
.about-page {
  background-image: url("https://images.unsplash.com/photo-1613398775233-e4fbcb8e0b6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  min-height: 1000px;
  background-size: cover;
  margin-top: -50px;
  background-repeat: no-repeat;
}
</style>