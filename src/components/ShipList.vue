<template>
  <div class="card-list-container">
    <div v-if="isLoading">Yükleniyor...</div>
    <ul v-else class="card-list">
      <li v-for="ship in ships" :key="ship.name">
        <router-link
          :to="{ name: 'Ship', params: { name: formatAsLink(ship.name) } }"
        >
          <ShipListItem :ship="ship"></ShipListItem>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ShipListItem from "@/components/ShipListItem.vue";
export default {
  components: {
    ShipListItem,
  },
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

  methods: {
    formatAsLink(str) {
      return str.toLowerCase().split(" ")
        .join("-").toString();
    },
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