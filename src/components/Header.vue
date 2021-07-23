<template>
  <router-link :to="{name: 'Home', params: {}}">
    <header class="header">StarWars Ships</header>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #efefef;
  margin-bottom: 50px;
  font-size: 36px;
}

a {
  color: black;
  text-decoration: none;
}
</style>
