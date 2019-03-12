<template>
  <v-stepper v-model="e1" alt-labels>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Basic User Settings</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Tags</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <UserSettings @setStep="changeStep(2)" />
      </v-stepper-content>
      <v-stepper-content step="2">
        <UserTags @setStep="changeStep(1)" />
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
        e1: 0
      }
    },
    methods: {
      changeStep (step) {
        this.e1 = step
      }
    },
    components: {
      UserSettings,
      UserTags
    }
  };
</script>

<style scoped>
.v-stepper__content {
  padding-top: 0;
}
</style>
