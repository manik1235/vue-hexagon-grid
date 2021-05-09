<template>
  <div id="app">
    <HexagonGrid text="Hello World!"></HexagonGrid>
    <HexagonGrid color="blue">
      <span slot="top">8</span>
      <span slot="middle">Oxygen</span>
      <span slot="bottom">O2</span>
    </HexagonGrid>
  </div>
</template>

<script>
import HexagonGrid from './components/hexagon-grid'

export default {
  name: 'App',
  components: {
    HexagonGrid
  }
}
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
