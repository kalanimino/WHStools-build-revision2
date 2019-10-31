<template>
    <v-container class="grey lighten-3 px-3">

        <v-layout row justify-start wrap>

            <v-flex xs12 md6>
                
                <v-container column>

                    <v-flex xs12>
                        <p class="display-1">About WHS tools</p>
                    </v-flex>

                    <v-flex xs12>
                        <p class="headline">Registering for your next classes can be difficult and confusing, or maybe you don't know what you need to get the honors you want. WHStools is a tool that helps Waipahu High School students determine how to better their future, whether that is providing class descriptions or honors requirements.</p>
                    </v-flex>

                </v-container>

            </v-flex>

            <v-flex xs12 md6>
                <v-responsive>
                    <v-img :src="require('@/assets/homepage/template3.jpg')" :apect-ratio="16/9" max-height="300" contain></v-img>
                </v-responsive>
            </v-flex>

        </v-layout>

    </v-container>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>
