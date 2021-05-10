<template>
<div class="hexagon-row">
  <Hexagon v-for="hex in hexes" :key="hex">
    <span slot="top"></span>
    <span slot="middle">ROW</span>
    <span slot="bottom"></span>
  </Hexagon>
</div>
</template>

<script>
import Hexagon from '../hexagon'
export default {
  name: 'HexagonRow',
  components: { Hexagon },
  data () {
    return {
    }
  },

  props: {
    color: {
      default: 'grey',
      type: String
    },
    hexes: {
      type: Number,
      default: 8
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="sass">
.hexagon-row
  display: flex
  margin-bottom: -3vmin

.hexagon:first-child
  margin-left: 0.0vmin
</style>
