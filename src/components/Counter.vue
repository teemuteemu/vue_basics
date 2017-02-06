<template>
  <div class="counter">
    <p>Counter state:</p>
    <p>{{ counter }}</p>

    <div class="counter__controls" v-if="controls">
      <button @click="decrement()">-</button>
      <button @click="increment()">+</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    props: {
      'controls': Boolean
    },
    computed: {
      counter () {
        return this.$store.getters.counter
      }
    },
    methods: {
      increment () {
        this.$store.dispatch('increment');
      },
      decrement () {
        this.$store.dispatch('decrement');
      }
    }
  }
</script>
