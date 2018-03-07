import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'

import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import Machine from './Machine.vue'

Vue.use(VueRouter);

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAGOT9W3VZ488j5-pUg7NVaRpKaIRLQX0A',
    }
});

Vue.component('template-machine',Machine);

const routes =[
    {path:'/list', component: MachinesList},
    {path:'/map', component: MachinesMap},
    {path:'/machine', component: Machine}
];

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
    router,
  render: h => h(App)

})

