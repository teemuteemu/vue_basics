<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <p>{{ counter }}</p>
    <button @click="decrement()">-</button>
    <button @click="increment()">+</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'State:'
    }
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
