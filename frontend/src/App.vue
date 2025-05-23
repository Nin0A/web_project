
<script>
export default {
  name: 'App',
};
</script>

<template>
  <v-app>
    <v-main>
      <VideoPlayer />
      <v-btn color="primary">Test</v-btn>
      <router-link to="/map">Voir la carte</router-link>
    </v-main>
  </v-app>
</template>
<main>
  <router-view />
</main>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
