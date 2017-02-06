<template>
  <div class="menu">
    <h3>Menyy:</h3>
    <ul>
      <li v-for="route in routes">
        <router-link :to="route.path">{{ route.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routesDef from '../routes';
const { routes } = routesDef;

export default {
  name: 'menu-bar',
  data () {
    return {
      routes
    }
  }
}
</script>

<style>
</style>

