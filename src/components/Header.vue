<template>
  <div class="HeaderCom">
    <v-toolbar fixed app class="">
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase mr-5">
        <span>WHS</span>
        <span class="subheading font-weight-light ">&nbsp TOOLS</span>
      </v-toolbar-title>

      <v-toolbar-items>

        <v-btn flat color="grey" class="" router to='/'>
          <v-icon>home</v-icon>
        </v-btn>

        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
          <v-btn flat color="grey" class="px-4" v-on="on">
            <span>Registration</span><v-icon>expand_more</v-icon>
          </v-btn>
          </template>
        <v-list>
          <v-list-tile v-for="menu in menu" :key="menu.link">
            <router-link :to="menu.link">
              <v-list-tile-title>{{menu.title}}</v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
        </v-menu>
        <v-divider vertical class="py-3" inset></v-divider>
        
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on }">
          <v-btn flat color="grey" v-on="on">
          <span>Honors</span><v-icon>expand_more</v-icon>
          </v-btn>
          </template>
        <v-list>
          <v-list-tile v-for="menu in menu2" :key="menu">
            <router-link :to=" menu.link">
              <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
        </v-menu>
       
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" color="red" app></v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      menu: [
        {title:"Math", icon: "some_Icon", link:"/math"},
        {title:"Languages", icon: "some_Icon", link:"/languages"},
      ],

      menu2: [
        {title:"Academic", icon: "some_Icon", link:"/academic"},
        {title:"CTE", icon: "some_Icon", link:"/cte"}
      ]

    })
  }
</script>
