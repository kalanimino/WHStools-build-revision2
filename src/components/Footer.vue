<template>
  <v-footer>
    <v-card class="flex flat tile">
      <v-card-title class="grey lighten-3 px-5 #E0E0E0--text">
        <strong>Waipahu High School</strong>
        <v-layout justify-center row wrap>
        <v-btn color="grey" round flat>
          About
        </v-btn>
        <a href="https://www.waipahuhigh.org/apps/contact/" target="_blank">
        <v-btn color="grey" round flat>
          Contact Us
        </v-btn>
        </a>
        <a href="https://github.com/kalanimino/WhsToools" target="_blank">
        <v-btn color="grey" flat round class="px-5">
          <v-icon>code</v-icon>
        </v-btn>
        </a>
        </v-layout>
        </v-card-title>
      </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
          'About',
          'Contact Us',
      ]

    })
  }
</script>