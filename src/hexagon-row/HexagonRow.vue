<template>
  <div class="hexagon-row">
    <hexagon v-for="cell in 8">
      <span slot="top">{{ topMessage }}</span>
      <span slot="middle">{{ middleMessage }}</span>
      <span slot="bottom">{{ bottomMessage }}</span>
    </hexagon>
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
      }
    },

    methods: {
      onClick () {
        this.$emit('click');
      }
    }
  }
</script>

<style lang="sass">
  .hexagon-row
    display: flex
    margin-bottom: -2.6vmin


  .hexagon:first-child
    margin-left: 0.0vmin


</style>
