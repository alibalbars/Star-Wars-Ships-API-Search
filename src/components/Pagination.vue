<template>
  <div class="pagination" >
    <input id="1" type="radio" name="pageButton" value="1" v-model="picked" @change="handleChange"/>
    <label for="1">1</label>

    <input id="2" type="radio" name="pageButton" value="2" v-model="picked" @change="handleChange"/>
    <label for="2">2</label>

    <input id="3" type="radio" name="pageButton" value="3" v-model="picked" @change="handleChange"/>
    <label for="3">3</label>

    <input id="4" type="radio"  name="pageButton" value="4" v-model="picked" @change="handleChange"/>
    <label for="4">4</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "1",
    };
  },

  methods: {
      handleChange(event){
          alert(event)
      }
  }
};
</script>

<style scoped>
    .pagination {
        display: flex;
        justify-content: center;
        gap: 15px;
    }
    label {
        border: 1px solid;
        width: 30px;
        height: 30px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 20px;
        margin-bottom: 20px;
        
    }

    input[type="radio"] {
        appearance: none;
        display: none;
    }

    input[type="radio"]:checked + label{
        background-color: lightgrey;
    }

</style>