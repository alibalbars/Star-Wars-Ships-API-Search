<template>
  <div class="card-list-container">
    <!-- <p v-text="queryData.query"></p> -->
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
const baseUrl = "https://swapi.dev/api/starships/?search=";
export default {
  props: {
    query: String,
  },
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
    this.getShips(baseUrl);
  },

  // Handle props changes
  watch: {
    $props: {
      handler() {
        // console.log(this.queryData.filterOption);
        let query = this.query;

        this.getShips(baseUrl + query);
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    formatAsLink(str) {
      return str.toLowerCase().split(" ").join("_").toString();
    },

    getShips(url) {
      let ships = [];
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          ships = data.results;
          this.ships = data.results;
          console.log(this.ships);
          this.isLoading = false;
          
        });
    },

    filterByName(results) {
      return results.filter(
        (ship) => ship.name.toLowerCase() === this.queryData.query.toLowerCase()
      );
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
}
</style>