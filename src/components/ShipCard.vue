<template>
  <!-- <router-link :to="shipLink"> -->
    <div class="ship-card">
      <p>NAME: {{ name }}</p>
      <p>MODEL: {{ model }}</p>
      <p>RATING: {{ rating }}</p>
    </div>
  <!-- </router-link> -->
</template>

<script>
export default {
  props: ["name", "model", "rating"],
  name: "ShipCard",
  data() {
    return {
      name: "name",
    };
  },
  computed: {
    shipLink() {
      return `/ship/${formatAsUrl(this.name)}`;
    }
  },
  methods: {
    abc(str) {
      // str.toLowerCase()
      //   .split(' ')
      //   .join('-')
      //   .toString();
    }
  },
};
</script>

<style scoped>
.ship-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: lightgrey;
  width: 250px;
  height: 350px;
}
</style>
