<template>
  <div class="foo">
    <h1>{{ msg }}</h1>
    <counter></counter>
  </div>
</template>

<script>
import Counter from './Counter';

export default {
  name: 'foo',
  components: {
    Counter
  },
  data () {
    return {
      msg: 'ebin foo :D'
    }
  }
}
</script>
