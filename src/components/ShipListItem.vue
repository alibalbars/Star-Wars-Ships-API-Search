<template>
  <div class="ship-card">
    {{ ship.name }}
    

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