<template>
<div class="hexagon" v-bind:class="color" @click="onClick">
  <div class="top">
    <slot name="top"></slot>
  </div>
  <div class="middle">
    <slot name="middle"></slot>
  </div>
  <div class="bottom">
    <slot name="bottom"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'Hexagon',
  data () {
    return {
    }
  },

  props: {
    color: {
      default: 'white',
      type: String
    },

    background: {
      default: 'grey',
      type: String
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
@import url('https://fonts.googleapis.com/css?family=Roboto|Russo+One')

.hexagon
  font-family: 'Roboto', sans-serif

  &:first-child
    margin-left: 0.0vmin
  .top
    font-size: 0.5rem
  .middle
    font-size: 0.75rem
  .bottom
    font-size: 0.5rem
  &:before
    content: ""
    border-bottom: 3vmin solid #6C6
    border-left: 5.2vmin solid transparent
    border-right: 5.2vmin solid transparent
    position: absolute
    top: -2.9vmin
  margin: 2.9vmin -0.1vmin 2.9vmin 0.1vmin
  width: 10.4vmin
  height: 6.0vmin
  background-color: #6C6
  position: relative
  display: flex
  flex-direction: column
  justify-content: space-around
  align-self: center
  text-align: center
  color: #fff
  &:after
    content: ""
    position: absolute
    bottom: -2.9vmin
    border-top: 3.0vmin solid #6C6
    border-left: 5.2vmin solid transparent
    border-right: 5.2vmin solid transparent
  &:before, &:after
    transition: all 0.3s ease-out
  transition: all 0.3s ease-out
  &.invisible
    &:before
      border-bottom: 3vmin solid #2c3e50
      border-left: 5.2vmin solid transparent
      border-right: 5.2vmin solid transparent
    background-color: #2c3e50
    &:after
      border-top: 3.0vmin solid #2c3e50
  &:not(.invisible):hover
    &:before
      border-bottom: 3vmin solid tomato
    background-color: tomato
    cursor: pointer
    transform: scale(1.4)
    position: relative
    z-index: 1000
    &:after
      border-top: 3.0vmin solid tomato

$hexagon-colors: ("grey": "#888", "amber": "#ffc107", "orange": "#fb8c00", "red": "#f44336", "blue": "#0288d1", "green": "#43a047", "lime": "#cddc39", "violet": "#5e35b1", "indigo": "#3949ab")

@each $name, $color in $hexagon-colors
  .#{$name}
    &:before
      border-bottom: 3vmin solid #{$color}
    background-color: #{$color}
    &:after
      border-top: 3vmin solid #{$color}
</style>
