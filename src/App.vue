<template>
  <v-app>
    <header><Menu/></header>
    <v-main>
      <router-view></router-view>
    </v-main>
     <footer> <Footer/> </footer>  
  </v-app> 
</template>

<script>
import Menu from './components/menu'
import Footer from './components/footer'
import Home from './views/Home'
import CityDetails from './views/CityDetails'


export default {
  name: 'App',

  components: {
    Menu,
    Footer,
    Home,
    CityDetails  
  }
}
</script>

