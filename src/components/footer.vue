<template>
    <div class="footer"> 
      <v-btn
        href="http://www.kattniz.se" 
        target="_blank"
        text=""     
      >
        <span class="mr-2">Made by Kattis</span>
        <v-icon style="color:white">mdi-open-in-new</v-icon>
      </v-btn>
        <img src="https://www.countryflags.io/SE/shiny/64.png">
    </div>
</template>
<script>
export default {
    name: 'Footer',
    data(){
    return {
      kattis:'http:www.kattniz.se'
    }
  }
}
</script>

<style>
.footer {
    width:100%;
    height:100%;
    background-color: #0094B8;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
   
}
h3{
    font-weight: 400;
    }
span
{
   font-weight: 700;
   color:#fff;
}
.footer img{
   max-width:30px;
   width: 100%;
   max-height: 40px;
   height: 100%;
}
</style>