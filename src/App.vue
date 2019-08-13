<template>
  <v-app class="grey lighten-4">
    <Navbar></Navbar>
    <v-content class="mx-5 mb-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default{
  name:'App',
  components: {Navbar},
  data(){
    return{

    }
  }
}
</script>
