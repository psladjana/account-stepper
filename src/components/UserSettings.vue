<template>
  <v-card
    class="mb-5"
    flat
  >
    <v-layout row>
      <v-flex xs4 order-md1 order-xs1>
        <v-card tile flat>
          <v-card-text>
            <div class="title font-weight-bold">Main User Settings</div>
            <v-subheader>Set the main user settings</v-subheader>
            <v-text-field
              :rules="[rules.required]"
              label="First name"
              soloe
              required
            ></v-text-field>
            <v-text-field
              :rules="[rules.required]"
              label="Last name"
              required
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md2 order-xs2>
        <v-card tile flat>
          <v-card-text>
            <div class="title font-weight-bold">User Email</div>
            <v-subheader>Set the user email</v-subheader>
            <v-text-field
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
          ></v-text-field>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs3>
        <v-card tile flat>
          <v-card-text>
            <div class="title font-weight-bold">Login Settings</div>
            <v-subheader>User login settings</v-subheader>
            <v-text-field
              :rules="[rules.required]"
              label="Username"
              required
            ></v-text-field>
            <v-text-field
            :rules="[rules.required, rules.min]"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
          ></v-text-field>
          <v-checkbox
            label="Add random password to the user and send it on email including a little welcome message"
            color="primary"
          ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn
    color="primary"
    right
    absolute
    @click="$emit('setStep')"
  >
    Next
  </v-btn>

  </v-card>
</template>

<script>
export default {
  name: 'UserSettings',
  props: ['rules'],
  data () {
    return {
    }
  },
  methods: {
    
  }
}
</script>
