<template>
  <v-app>
    
    <v-content id="body" class="grey lighten-4 pt-0">
      <Banner/>
      <Cards/>
      <About/>
      
    </v-content>

    <Footer/> 

  </v-app>
</template>

<script>
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Cards from '@/components/Cards';
import About from '@/components/About';
export default {
  name: 'App',
  components: {
    Footer,
    Banner,
    Cards,
    About
  },
  data () {
    return {
      //
    }  
  }
}
</script>

<style>
a{
  text-decoration: none
}
</style>
