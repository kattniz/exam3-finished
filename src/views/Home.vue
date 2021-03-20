<template>
  <div id="search">
    <h1 class="weather-header">Current weather</h1>
    <div class="search-bar">
    <input type="text" placeholder="Enter city name" v-model="city" />
    <button @click="getWeather" class="search-cont">Submit</button>
     </div>
     <div class="weather-info" v-if="item" :item="item">
        <img v-bind:src="'http://openweathermap.org/img/w/' + item.icon + '.png' " />
      <p>Earth gives you : {{item.weather}}</p>
      <p>Temperature : {{item.temp}} degrees</p>
  </div>      
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      city: "",
      item: ""
    };
  },
  methods: {
    getWeather: function() {
    
      fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=084e8e801060835a34ce4253e6cff95c`)
        .then(response => response.json())
        .then(json => {
          const { main, weather, name } = json
          this.item = {
            temp: Math.floor(main.temp),
            city: name,
            weather: weather[0].description,
            icon: weather[0].icon
          }
        })
    }
  }
}
</script>

  
    
<style>
    #search{
            background-image: url(https://www.thebridgenewsng.com/wp-content/uploads/2018/02/weather.jpeg);
            width: 100%;
            height: 100vh;
            padding-top: 100px;       
    }
    .weather-header{
        text-align: center;
        margin: 0px auto;
        margin-bottom: 20px;
        color: white;
    }
    .search-cont {   
      padding:20px;
       background-color: rgb(247, 243, 35);
      border-radius: 50px;
      font-size: 20px;   
      }
    .search-cont:hover{
        background-color: darkslateblue;
        color: white;
    }
    .search-bar { 
        margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background:#fff;
          border-radius: 2000px;
          max-width:500px;
          widows: 100%;
          box-shadow: 0 30px 25px -19px rgba(250, 241, 115, 0.966) , 0 10px 20px #00b894;
          }
         
    input[type="text"] {
             font-size: 18px;
             font-family : inherit;
             padding:15px;
             width:90%;
             background:transparent;
             outline:none;
             color: #2d3436;
             border:none;    
         }
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #b2bec3;
            font-size: 20px;
            font-style:italic;
            opacity: 1; /* Firefox */
        }
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            font-style:italic;
            color:#b2bec3;
        }
        ::-ms-input-placeholder { /* Microsoft Edge */
            font-style:italic;
            color:#b2bec3;
        }
        :focus {
            color:#b2bec3;
        }
        .weather-info{
            margin: 0 auto;
            margin-top: 50px;
            text-align: center;
            background:#fff;
            max-width:450px;
            widows: 100%;
            height: 180px;
            box-shadow: 0 30px 25px -19px rgba(250, 241, 115, 0.966) , 0 10px 20px #00b894;
          }
</style>