<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <counter controls></counter>
  </div>
</template>

<script>
import Counter from './Counter';

export default {
  name: 'index',
  components: {
    Counter
  },
  data () {
    return {
      msg: 'Index...'
    }
  }
}
</script>
