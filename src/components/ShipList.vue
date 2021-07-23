<template>
  <div class="card-list-container">
    <!-- <Pagination></Pagination> -->

    <div v-if="isLoading">Yükleniyor...</div>
    <ul v-else class="card-list">
      <li v-for="ship in ships" :key="ship.name">
        <router-link
          :to="{ name: 'Ship', params: { name: formatAsLink(ship.name) } }"
          class="link"
        >
          <ShipListItem :ship="ship"></ShipListItem>
        </router-link>
      </li>
    </ul>
    <!-- <Pagination></Pagination> -->
  </div>
</template>

<script>
import ShipListItem from "@/components/ShipListItem.vue";
import Pagination from "@/components/Pagination.vue";
const baseUrl = "https://swapi.dev/api/starships/?search=";
export default {
  props: {
    query: String,
  },
  components: {
    ShipListItem,
    Pagination,
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
        this.getShips(baseUrl + this.query);
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

.link {
  text-decoration: none;
  color: black;
}
</style>