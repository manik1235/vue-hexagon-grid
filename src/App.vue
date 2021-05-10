<template>
<div id="app">
  <HexagonGrid rowCount="rowCount"></HexagonGrid>
</div>
</template>

<script>
import HexagonGrid from './components/hexagon-grid'

export default {
  name: 'App',
  components: {
    HexagonGrid
  },
  data () {
    return {
      rowCount: 4
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
