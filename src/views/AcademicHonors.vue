<template>
  <div>
<v-content>
    <v-subheader id="AcademicTitle" class="title mt-3">Academic Honors Requirements</v-subheader>

    <v-container id="AcaHonors" fluid>

      <v-layout justify-start wrap align-center>

        <v-flex xs12 md4 lg3>

           <v-card style="position:relative;" height="20rem" class="card">
              
              <div class="checkbox">
                <v-checkbox @click="'woomy!'" v-model="gpaChecked"></v-checkbox>
              </div>

              <v-layout wrap column justify-center>

                <v-flex xs12>

                  <v-card-title>
                    <span class="headline" style="margin: auto;">Select GPA</span>
                    <span class="subheader text-xs-center" style="margin: auto" >*GPA must be 3.0+ to be eligible</span>
                  </v-card-title>

                </v-flex>

                <v-flex xs12 class="pa-2">

                  <v-text-field  id="hecker "class="title text-xs-center" v-model="gpa" single-line type="number" style="width:60px;margin:auto" step="0.01">{{gpa}}</v-text-field>

                  <v-slider
                    v-model="gpa"
                    step="0.01"
                    :min="0.0"
                    :max="5.0"
                  >

                  </v-slider>

                </v-flex>

              </v-layout>

            </v-card>

        </v-flex>

        <template v-for="items in classes">
          <v-flex xs12 md4 lg3 :key="items.title" class="pa-3">

            <v-card style="position:relative;" height="20rem" @click="items.checked = !items.checked" class="card">
              
              <div class="checkbox">
                <v-checkbox v-model="items.checked"></v-checkbox>
              </div>

              <v-layout wrap column justify-center>

                <v-flex xs12>

                  <v-card-title>
                    <span class="headline" style="margin: auto;">{{items.title}}</span>
                  </v-card-title>

                </v-flex>

                <v-flex xs12 class="mt-4">

                  <v-responsive class="mt-auto">
                    <font-awesome-icon :icon="items.icon" class="fa-10x" style="margin: auto; display:table;" />
                  </v-responsive>

                </v-flex>

              </v-layout>

            </v-card>

          </v-flex>

        </template>

        <v-flex xs12>
          <v-btn large @click="AcademicCheck()" color="blue lighten-2 white--text" depressed class="mx-auto" style="display:table;">
            <span>Am I Eligible?</span> 
          </v-btn>
        </v-flex>

      </v-layout>


    </v-container>
</v-content>
  </div>
</template>

<script>

 export default {
    data () {
      return {
        gpa: 0,
        eligible: false,
        gpaChecked: false, 
        classes: [
          {title:'Geometry',checked:false,icon:'ruler-combined'},
          {title:'Algebra I',checked:false,icon:'superscript'},
          {title:'Algebra II',checked:false,icon:'square-root-alt'},
          {title:'4th Math Credit (Beyond Alg II)',checked:false,icon:'infinity'},
          {title:'Integrated Science',checked:false,icon:'flask'},
          {title:'Biology',checked:false,icon:'leaf'},
          {title:'3rd Science Credit',checked:false,icon:'atom'},
          {title:'4th Science Credit',checked:false,icon:'user-astronaut'},
          {title:'1 AP/IB/Running Start Class Credit',checked:false,icon:'award'},
          {title:'12 AP/IB/Running Start Class Credit',checked:false,icon:'award'},
        ]
      }
    },
    methods: {
      AcademicCheck: function() {
        let counter = 0;
        this.classes.forEach(data => {
          if(data.checked)
            counter++;
        });

        if(counter == this.classes.length && this.gpaChecked) {
          this.eligible = true;
          alert('Your Eligible my guy!');
        }
        else {
          this.eligible = false;
          alert('Your not my dude!');
        }
      }
    },
    watch: {
      gpa : function () {
        if(this.gpa >= 3.0) {
          this.gpaChecked = true;
        }
        else {
          this.gpaChecked = false;
        }
      }
    }
  }

</script>

<style>
  .checkbox {
    position: absolute;
    left: 1%;
    top: -6%;
  }


  .card:hover {
    cursor: pointer;
    box-shadow: 2px 8px 45px rgba(0, 0, 0, .3);
    transform: translate3D(0, -4px, 0);
  }

  .button:active {
    transform: translate3D(0, 4px, 0);
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12); 
  }

</style>
