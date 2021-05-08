<template>
  <div id="app">
    <vue-hexagon text="Hello World!"></vue-hexagon>
    <vue-hexagon color="blue">
      <span slot="top">8</span>
      <span slot="middle">Oxygen</span>
      <span slot="bottom">O2</span>
    </vue-hexagon>
  </div>
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

