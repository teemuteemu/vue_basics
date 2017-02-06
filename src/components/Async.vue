<template>
  <div class="async">
    <h1>Fancy async thingies right here</h1>
    <p v-if="fetching">LOADING...</p>

    <p v-if="error">Error! {{ error }}</p>

    <ul v-if="topics.length > 0">
      <li v-for="topic in topics">
        {{ topic.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'async',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('fetchData');
  },
  computed: {
    fetching () {
      return this.$store.getters.fetching;
    },
    error () {
      return this.$store.getters.error;
    },
    topics () {
      return this.$store.getters.topics;
    }
  }
}
</script>
