<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <router-link to="/map">Voir la carte</router-link>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>