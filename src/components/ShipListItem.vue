<template>
  <div class="ship-card">
    <p>{{ ship.name }}</p>
    <p>{{ ship.model }}</p>
    <p>{{ ship.hyperdrive_rating }}</p>
    

  </div>
</template>

<script>
export default {
  props: {
    ship: Object,
  }
};
</script>

<style scoped>
.ship-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #efefef;
  width: 250px;
  height: 350px;
}
</style>