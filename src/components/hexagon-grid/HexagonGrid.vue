<template lang="html">
  <div class="hexagon-grid">
    <HexagonRow></HexagonRow>
    <HexagonRow></HexagonRow>
    <HexagonRow></HexagonRow>
  </div>
</template>

<script>
/**
 * Component documentation
 */

import HexagonRow from '../hexagon-row'

export default {
  name: 'HexagonGrid',
  components: { HexagonRow },
  props: {
    /**
     * The component text
     */
    text: {
      type: String,
      default: '',
      required: true
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
