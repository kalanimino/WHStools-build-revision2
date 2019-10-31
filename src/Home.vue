<template>
  <v-app>
    
    <v-content id="body" class="grey lighten-4">
      <Cards/>
      <About/>
    </v-content>

    <Footer/> 

  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cards from '@/components/Cards'
import About from '@/components/About'
export default {
  name: 'App',
  components: {
    Footer,
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