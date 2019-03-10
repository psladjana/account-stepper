<template>
  <v-app>
    <v-content>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <v-card class="card--flex-toolbar">
              <v-toolbar card prominent>
                <v-toolbar-title class="body-2 grey--text">Add User</v-toolbar-title>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <AccountWizard />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AccountWizard from './components/AccountWizard'

export default {
  name: 'App',
  components: {
    AccountWizard
  },
  data () {
    return {
      //
    }
  }
}
</script>
