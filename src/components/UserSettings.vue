<template>
  <v-card
    class="mb-5"
    flat
  >
    <v-layout row>
      <v-flex xs4 order-md1 order-xs1>
        <v-card tile flat>
          <v-card-title>
            <div class="font-weight-bold">Main User Settings</div>
            <v-subheader>Set the main user settings</v-subheader>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="firstName"
              label="First name:"
              placeholder=" "
              data-vv-name="firstName"
              v-validate="'required'"
              :error-messages="errors.collect('firstName')"   
              required
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              label="Last name:"
              placeholder=" "
              data-vv-name="lastName"
              v-validate="'required'"
              :error-messages="errors.collect('lastName')"
              required
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md2 order-xs2>
        <v-card tile flat>
          <v-card-title>
            <div class="font-weight-bold">User Email</div>
            <v-subheader>Set the user email</v-subheader>
          </v-card-title>
          <v-card-text>
            <v-text-field
            v-model="email"
            label="E-mail:"
            placeholder=" "
            data-vv-name="email"
            v-validate="'required'"
            :error-messages="errors.collect('email')"
            required
          ></v-text-field>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs3>
        <v-card tile flat>
          <v-card-title>
            <div class="font-weight-bold">Login Settings</div>
            <v-subheader>User login settings</v-subheader>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="username"
              label="Username:"
              placeholder=" "
              data-vv-name="username"
              v-validate="'required'"
              :error-messages="errors.collect('username')"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password:"
              placeholder=" "
              data-vv-name="password"
              :error-messages="errors.collect('password')"
            ></v-text-field>
            <v-checkbox
              label="Add random password to the user and send it on email including a little welcome message"
              color="primary"
              data-vv-name="password"
              :error-messages="errors.collect('password')"
            ></v-checkbox>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn
    color="primary"
    right
    absolute
    @click="checkStep"
  >
    Next
  </v-btn>

  </v-card>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'UserSettings',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      sendPassword: false,
      dictionary: {
        attributes: {
          email: 'E-mail',
          firstName: 'First name',
          lastName: 'Last name',
          username: 'Username',
          password: 'Password'
        },
        custom: {
          email: {
            required: () => 'Email can not be empty'
          }
        }
      }
    }
  },
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    checkStep () {
      this.$validator.validateAll()
      .then(result => {
        if (result) this.$emit('setStep', 2)
      })
    }
  }
}
</script>

<style scoped>
.v-subheader {
  padding: 0;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.54);
  height: auto;
}

</style>