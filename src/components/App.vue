<template>
  <div id="app">
    <div class="menu">
      <menu-bar></menu-bar>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuBar from './Menu';

export default {
  components: {
    MenuBar
  }
};
</script>

<style>
</style>
