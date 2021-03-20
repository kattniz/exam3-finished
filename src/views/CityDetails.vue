<template>
  <div id="search">
    <h1 class="weather-header">City details</h1>
    <div class="search-bar">
    <input type="text" placeholder="Enter city name" v-model="city2" />
    <button @click="getDetails()" class="search-cont">Submit</button>
     </div>
     <div class="weather-info" v-if="item" :item="item" >
       <p> Latitude: {{item.lat}} </p>
       <p>Longitude: {{item.long}} </p>
       <p>Country code :{{item.country}} </p> 
          <img v-bind:src="'https://www.countryflags.io/' + item.country + '/shiny/64.png'">
  </div>
  </div>
</template>
  
<script>

export default {
  name: "CityDetails",
  data() {
    return {
      city: "",
      item: "",
    }
  },
  methods: {
   
    getDetails() {
    
      fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${this.city2}&units=metric&appid=084e8e801060835a34ce4253e6cff95c`)
        .then(response => response.json())
        .then(json => {
          const {city, name} = json
          this.item = {           
            city2: name,
            lat: city.coord.lat,
            long: city.coord.lon,
            country: city.country
          }
        })
    }
  }
}
</script>   
<style>
</style>