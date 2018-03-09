//chargement globale de composant; app.vue pour chargement local
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import Machines from './MachinesList.vue'
import Map from './MachinesMap.vue'
import Machine from './Machine.vue'
import titi from './toto.vue'
import * as VueGoogleMaps from 'vue2-google-maps'



Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB51r2jz8StOiayZK4ZRSVJ8nkYZYU5LD4',
  }
})

Vue.component('machinesClick', Machines)
Vue.component('mapClick', Map)
Vue.component('machineClick', Machine)
Vue.component('toto', titi)

Vue.use(VueRouter)


const router = new VueRouter({
    routes:Routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
