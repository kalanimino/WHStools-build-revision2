<template>
    <v-container>

        <v-layout row justify-center align-center wrap>
            <v-flex xs12 sm6 xl4 v-for="items in cards" :key="items.slogan">

                <v-card class="grey lighten-3 ma-5" height="50%" fluid>
                    <v-responsive>
                        <v-img :aspect-ratio="16/9"  :src="items.image"></v-img>
                    </v-responsive>
                    
                    <v-card-title primary-title height="100px">
                        
                        <h3 class="mb-0 headline">
                            {{items.slogan}}
                        </h3>

                    </v-card-title>

                    <v-card-text class="grow">
                        <span v-html="items.text"> </span>
                    </v-card-text>

                    <v-card-actions>

                        <v-btn flat color="orange">{{items.buttonText}}</v-btn>

                    </v-card-actions>

                </v-card>
            
            </v-flex>

            <v-flex xs12>

                

            </v-flex>

        </v-layout>

    </v-container>
</template>

<script>
  export default {
    data: () => ({
        cards: [
            {image:require('@/assets/homepage/template1.png'),slogan:'Registration Assistance',text: 'PHN helps students pick classes for optimum academic success. Registration assistance helps those who are unclear on what classes they should take choose courses based on their choice of career.<br><br><br>',buttonText: 'Learn More', reroute:'something'},
            {image:require('@/assets/card1.jpg'),slogan:'Honors & Graduation Requirements',text: 'View what credits are needed to be successful in Waipahu High School. Graduation from Waipahu High School is not allowed until certain credits are recieved. <br> Going above and beyond will grant you certain honors. View what is needed to achieve these honors here.',buttonText: 'Learn More', reroute:'something'}
        ]
    })
  }
</script>