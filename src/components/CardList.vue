<template>
  <div class="card-list-container">
    <div v-if="isLoading">
      Yükleniyor...
    </div>
    <ul v-else class="card-list">
      <li v-for="ship in ships">
        <ShipCard :name=ship.name :model=ship.model :rating=ship.hyperdrive_rating></ShipCard>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ships: [],
      isLoading: true,
    };
  },

  created() {
    fetch("https://swapi.dev/api/starships")
      .then((response) => response.json())
      .then((data) => {
        this.ships = data.results;
        console.log(this.ships);
        this.isLoading = false;
      });
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  list-style-type: none;
  padding: 0 10%;
  /* max-width: 1075px;
    margin: 0 auto; */

}
</style>