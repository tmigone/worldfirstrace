<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>WORLD OF WARCRAFT&nbsp;</span>
        <span class="font-weight-light">&nbsp;WORLD FIRST TRACKER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in items" v-bind:key="item.name" :to="item.url" flat>{{ item.name }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" temporary absolute width="200" id="drawer">
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" v-bind:key="item.name" :to="item.url">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content style="padding-top:0px;">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      drawer: null,
      items: [
        { name: 'HOME', url: '/' },
        { name: 'CREDIT', url: '/credit' },
        { name: 'FAQ', url: '/faq' }
      ]
    }
  }
}
</script>

<style>
@media (max-width: 540px) {
  span {
    font-size: 3.3vw;
  }
}
</style>
