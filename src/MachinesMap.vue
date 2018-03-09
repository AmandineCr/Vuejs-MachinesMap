<template>
  <div id="mapmac">
    <h1>Machine's Map</h1>
    <gmap-map :center="{lat:51, lng:0}" :zoom="7" style="width: 100%; height: 800px">
      <gmap-marker v-bind:key="machine.id" v-for="machine in machines" v-bind:position="{lat: machine.latitude,lng: machine.longitude}">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        machines: [
          {
            id: 1,
            latitude: 10,
            longitude: 10,
          },
          {
            id: 2,
            latitude: 11,
            longitude: 9.6,
          }
        ]
      }
    },
  }
</script>

<style scoped>
  #mapmac {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
    margin-top: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
