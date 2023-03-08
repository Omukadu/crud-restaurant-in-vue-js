<template>
  <div>
    <!-- <router-link to="/">home</router-link>
    <router-link to="/signup">signup</router-link>
    <router-link to="/login">login</router-link> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },

}
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
</style>