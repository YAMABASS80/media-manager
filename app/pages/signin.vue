<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Media Manager</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="username"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
                <v-alert
                  v-if="errors"
                  :value="true"
                  type="warning"
                >
                    {{errors}}
                </v-alert>

              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="signIn">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  layout : "signin",
  data () {
    return {
      username: '',
      password: '',
      errors: ''
    }
  },
  methods: {
    signIn () {
      Auth.signIn(this.username, this.password)
        .then(data => this.$router.push('/'))
        .catch(err => this.errors = err.message)
    },
  }
}
</script>
