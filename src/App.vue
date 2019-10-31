<template>
  <v-app>
    <Header/>
    <v-content id="body" class="grey lighten-4">
      <router-view :text="'oof'" />
    </v-content>

  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
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
  text-decoration: none;
  color : peru;
}
</style>