<template>
    <div>
        {{name}}
        <!-- {{ ship.passengers }}
    {{ ship.max_atmosphering_speed }}
    {{ ship.manufacturer }}
    {{ ship.crew }}
    {{ ship.cargo_capacity }} -->
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        }
    },


    created() {
        const baseUrl = 'https://swapi.dev/api/starships/?search='
        fetch(baseUrl + this.formatAsShipName(this.name))
        .then(response => response.json())
        .then(data => console.log('aaa', this.filterByName(data.results)))
    },

    methods: {
        formatAsShipName(str) {
            return str.split('-').join(' ').toString();
        },
        filterByName(resultsArray) {
            return resultsArray.filter((ship) => this.formatAsShipName(ship.name) === this.formatAsShipName(this.name))
        }
    }
}
</script>

<style scoped>

</style>
