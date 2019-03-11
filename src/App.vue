<template>
  <v-app>
    <v-content>
      <v-container grid-list-xl text-xs-center>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <v-card class="card--flex-toolbar">
              <v-toolbar card prominent>
                <v-toolbar-title class="title dark--text toolbar-title">Add User</v-toolbar-title>
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

<style>
 .v-stepper,
 .v-stepper__header {
    box-shadow: 0 0 0 0;
 }
.v-stepper .v-stepper__step__step {
    border: 2px solid;
    background-color: transparent !important;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0,0,0,0.87) !important;
    height: 40px;
    min-width: 40px;
    width: 40px;
 }
 .theme--light.v-stepper .v-stepper__step__step .v-icon {
   color: rgba(0,0,0,0.87) !important;
 }
.v-toolbar__title {
    width: 100%;
    text-align: center;
}
.v-stepper__header {
    width: 60%;
    margin: 0 auto;
}

.v-card__text input {
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0,0,0,0.3);
  margin-top: 5px;
  padding: 5px;
}
.v-text-field {
  margin-top: 10px;
}
.v-input__slot {
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  align-items: flex-start;
}
.v-text-field > .v-input__control > .v-input__slot:before {
  border-width: 0;
}
.v-input--selection-controls.v-input .v-label {
  font-weight: normal;
  font-size: 14px;
  color:  rgba(0,0,0,0.4);
}
.theme--light.v-label {
    color: rgba(0,0,0,0.87);
    font-weight: 700;
    font-size: 20px;
}
.theme--light.v-input:not(.v-input--is-disabled) input, .theme--light.v-input:not(.v-input--is-disabled) textarea {
    color: rgba(0,0,0,0.4);
    font-size: 14px;
}
.v-messages {
  font-size: 14px;
  margin-top: 5px;
}
</style>