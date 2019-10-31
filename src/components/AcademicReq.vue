<template>
  <div>
<v-content>
    <v-subheader id="AcademicTitle" class="title mt-3">Academic Honors Requirements</v-subheader>

    <v-container id="AcaHonors" fluid>
      <v-checkbox v-for="classes in classes" :key="classes" :label='classes.title' :value='classes.value'></v-checkbox>

      <v-btn onclick="AcademicCheck()">
        <span>Am I Eligible?</span>
      </v-btn>
      <p>{{ selected }}</p>
    </v-container>
</v-content>
  </div>
</template>

<script>

 export default {
    data () {
      return {
        selected: [],
        classes: [
          {title:'Cumulative GPA of 3.0+', value:'GPA'},
          {title:'Geometry', value:'Geometry'},
          {title:'Algebra I', value:'AlgI'},
          {title:'Algebra II', value:'AlgII'},
          {title:'4th Math Credit (Beyond Alg II)', value:'4thMath'},
          {title:'Integrated Science', value:'IntegSci'},
          {title:'Biology', value:'Bio'},
          {title:'3rd Science Credit', value:'3rdSci'},
          {title:'4th Science Credit', value:'4thSci'},
          {title:'1 AP/IB/Running Start Class Credit', value:'AP1'},
          {title:'1 AP/IB/Running Start Class Credit', value:'AP2'},
        ]
      }
    }
  }

</script>