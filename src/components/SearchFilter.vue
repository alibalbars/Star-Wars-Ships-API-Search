<template>
  <div>
    <form class="filter-form">
      <input
        v-model="query"
        type="text"
        @change="onQueryChange"
        placeholder="search for name or model"
      />
      <button @click="search" type="button">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  data() {
    return {
      query: "",
    };
  },

  methods: {
    onQueryChange(event) {
    },

    search(event) {
      this.$emit("queryChanged", this.query);
      //   this.$emit("queryOptionChanged", this.queryOption);
    },
  },
};
</script>

<style scoped>
.filter-form {
  display: flex;
  gap: 15px;
  justify-content: center;
}
</style>