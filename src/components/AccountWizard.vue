<template>
  <v-stepper v-model="e1" alt-labels>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Basic User Settings</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Tags</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <UserSettings :rules="rules" @setStep="changeStep" />
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="lighten-1"
          height="200px"
        >
        
        </v-card>

        <v-btn
          right
          absolute
          color="primary"
          @click="e1 = 2"
        >
          Save
        </v-btn>

      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
  import UserSettings from './UserSettings'
  import UserTags from './UserTags'
  export default {
    data () {
      return {
        e1: 0,
        rules: {
          min: val => (val || '').length >= 8 || 'Min 8 characters',
          email: val => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(val) || 'Invalid e-mail.'
          },
          required: val => (val || '').length > 0 || 'This field is required'
        }
      }
    },
    methods: {
      changeStep () {
        this.e1 = 2
      }
    },
    components: {
      UserSettings,
      UserTags
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
