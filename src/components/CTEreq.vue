<template>
    <div>
      <v-subheader class="title mt-5">CTE Honors Requirements</v-subheader>
      <v-container fluid>
        <v-checkbox v-model="cte" :label="`B or higher in Pathway Core Class`"></v-checkbox>
        <v-checkbox v-model="cte" :label="`B or higher in 1st Pathway of Study class`"></v-checkbox>
        <v-checkbox v-model="cte" :label="`B or higher in 2nd Pathway of Study class`"></v-checkbox>
        <v-subheader pt-3>Completed one of the following</v-subheader>
        <v-checkbox v-model="cte" :label="`Earned at least 70% on the end of course assessments`"></v-checkbox>
        <v-checkbox v-model="cte" :label="`Earned a nationally-recognized certificate`"></v-checkbox>
        <v-checkbox v-model="cte" :label="`Earned a passing score on a Dual Credit Articulated Program of Study assessment`"></v-checkbox>         
      </v-container>
    </div>
</template>

<script>
 export default {
    data () {
      return {
        cte: false
      }
    }
  }

</script>
