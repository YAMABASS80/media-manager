<template>
  <v-app>
    <v-navigation-drawer
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
      dark
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile router exact @click="signOut">
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ログアウト</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      dark
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
      dark
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'home', title: 'ホーム', to: '/' },
        { icon: 'video_library', title: 'メディア管理', to: '/media_management' }
      ],
      // miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Media Manager'
    }
  },
  methods: {
    signOut(){
      Auth.signOut()
        .then(data => console.log(data))
        .then(data => this.$router.push('/signin'))
        .catch(err => console.log(err));
    }
  }
}
</script>
