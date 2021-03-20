<template>
    <div id="nav">
      <router-link to="/"><span>Weather app</span></router-link>
      <div class="pull-right">
        <router-link to="/">
        <span>Home</span>
        </router-link>
        <router-link to="/CityDetails">
        <span>City details</span>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
     name: 'Menu',
     components:{
     }
}
</script>

<style>
#nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0094B8;
    padding: 20px;
}   
   #nav a{
    color: #fff;
    padding: 0 1em;
    font-size: 1em;
    text-decoration: none;
    }

  @media screen and (max-width:357px){
    #nav {
      display: flex;
      flex-direction: column;
    } 
  }
  
</style>