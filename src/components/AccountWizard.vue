<template>
  <v-stepper v-model="e1" alt-labels non-linear>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" editable>Basic User Settings</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2" editable>Tags</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <UserSettings @setStep="changeStep" />
      </v-stepper-content>

      <v-stepper-content step="2">
        <UserTags />
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

<style scoped>
.v-stepper__content {
  padding-top: 0;
}
</style>
