<template>
  <div id="app">
    <img id="coffeemachine" src="https://www.foodequipment.co.nz/images/Coffee_Machines/duetto.png"/>
    <h2>
        <img class="coffeecup" src="http://webiconspng.com/wp-content/uploads/2017/09/Cup-Mug-Coffee-PNG-Image-90600.png"/>
        What do you want to do ?
        <img class="coffeecup" src="http://webiconspng.com/wp-content/uploads/2017/09/Cup-Mug-Coffee-PNG-Image-90600.png"/>
    </h2>
    <router-link to="/machines">Go to Machines list</router-link>
    <router-link to="/map">See the Map</router-link>
    <router-link to="/machine">Machine</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  //chargement du composant
  export default {
    name: 'app',
    data () {
      return {

              }
    },
    methods: {
      // onMachinesListClick: function (){
      //   window.alert("click");
      // },
      // onMapClick: function (){
      //   window.alert("click");
      // },

    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
}

h1, h2 {
  font-weight: normal;
  margin-top: 30px;
}

h2 {
  color: mediumslateblue;
}
h4 {
  margin-top:30px;
  margin-bottom:40px;
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
#coffeemachine {
  width: 400px;
  height: 390px;
  margin-top: 30px;
}

.coffeecup  {
    width: 120px;
    height: 60px;
    margin-top: 30px;
}
</style>
