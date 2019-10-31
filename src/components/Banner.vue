<template>
    <div class="body">
        <v-parallax :src="require('@/assets/banner2.png')" height="330">

                                <v-container id="text" class="my-5">

                                    <v-layout column>

                                        <v-flex >
                                            <p class="display-1 black--text">An academic tool for those</p>
                                            <p class="black--text display-1">at Waipahu High School</p>
                                        </v-flex>

                                        <v-flex>
                                            <v-btn color="white" class="ml-3" round>
                                                <span>Get Started</span>
                                            </v-btn>
                                        </v-flex>

                                    </v-layout>

                                </v-container>

        </v-parallax>

        <v-container>
            <v-layout row wrap justify-center>

                <v-flex xs12>

                    <v-layout column justify-start>

                        <v-flex xs12>

                        </v-flex>

                    </v-layout>

                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>
