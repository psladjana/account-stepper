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
            v-validate="'required|email'"
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
              :type="'password'"
              :disabled="sendPassword"
              data-vv-name="password"
              v-validate="!sendPassword ? 'required' : '' "
              :error-messages="errors.collect('password')"
              required
            ></v-text-field>
            <v-checkbox
              v-model="sendPassword"
              label="Add random password to the user and send it on email including a little welcome message"
              color="primary"
              data-vv-name="sendPassword"
              :error-messages="errors.collect('sendPassword')"
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
import { mapActions } from 'vuex'

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
      sendPassword: true,
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
            required: () => 'Email can not be empty.'
          }
        }
      }
    }
  },
  mounted () {
    this.$validator.localize('en', this.dictionary)
    this.password = Math.random().toString(36).slice(-8);
  },
  methods: {
    ...mapActions(['setUser']),
    checkStep () {
      this.$validator.validateAll()
      .then(result => {
        let user = {
          firstName: this.firstName, 
          lastName: this.lastName, 
          email: this.email, 
          username: this.username, 
          password: this.password
        }
        this.setUser(user)
        if (result) this.$emit('setStep', 2)
      })
    }
  },
  watch: {
    sendPassword (val) {
      if (this.sendPassword) {
        let pass = Math.random().toString(36).slice(-8);
        this.password = pass
      } else this.password = ''
    }
  }
}
</script>

<style scoped>
.v-subheader {
  padding: 0;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  height: auto;
}

</style>