<template>
  <div class="index">
    <h1>{{ msg }}</h1>

    <ul>
      <li v-for="feature in features">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script>
// import Counter from './Counter';

export default {
  name: 'index',
  components: {
  },
  data () {
    return {
      msg: 'Well well, what do we have here..',
      features: [
        'Vue-router',
        'Vuex',
        'Synchronous actions',
        'Asynchronous actions',
        'Vue magic',
        'Stuff'
      ]
    }
  }
}
</script>
