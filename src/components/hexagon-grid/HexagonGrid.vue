<template lang="html">
<div class="hexagon-grid">
  <HexagonRow v-for="row in rows" :key="row" :hexes="hexesPerRow"></HexagonRow>
</div>
</template>

<script>
import HexagonRow from '../hexagon-row'

export default {
  name: 'HexagonGrid',
  components: { HexagonRow },
  props: {
    hexesPerRow: {
      type: Number,
      default: 8
    },
    rows: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style lang="sass" scoped>
  .hexagon-grid
    margin: -5px 10px 10px 10px

  .hexagon-row:nth-child(even)
    background: #fafafa
    padding-left: 5.2vmin

  .hexagon-row:nth-child(odd)
    background: #eee
</style>
