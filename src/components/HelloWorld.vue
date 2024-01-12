<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1" them>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">Login in to your account</h2>
                    <h4 class="text-center text-grey">Log in to your account so you can continue building
                      <br>and editing your onboarding flows
                    </h4>
                    <form @submit.prevent>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                            <v-text-field v-model="emailDefaultValue"
                            label="Email" outlined dense color="blue" autocomplete="false" class="mt-16" type="email" 
                            hint="Enter your email to access this website" placeholder="your@email.com" :rules="rules"></v-text-field>
                            <v-text-field v-model="passwordDefaultValue"
                            label="Password" outlined dense color="blue" autocomplete="false" :append-inner-icon="marker ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="passwordVisible ? 'text' : 'password'" class="mt-16" hint="Enter your password to access this website" 
                            placeholder="Password" @click:append-inner="togglePasswordVisibility" :rules="rules"></v-text-field>
                            <v-row>
                              <v-col cols="12" class="d-flex justify-space-between align-center">
                                <v-checkbox label="Remember me" color="blue" hide-details></v-checkbox>
                                <span class="caption text-blue">Forget password</span>
                              </v-col>
                            </v-row>
                            <v-btn color="blue" dark block tile type="submit">Login</v-btn>
                            <h5 class="text-center text-grey mt-4 mb-3">Or log in using</h5>
                            <div class="d-flex justify-space-between align-center mx-10 mb-16">
                              <v-btn depressed variant="outlined" color="grey-lighten-2">
                                <v-icon color="red" size="large">mdi-google</v-icon>
                              </v-btn>
                              <v-btn depressed variant="outlined" color="grey-lighten-2">
                                <v-icon color="blue" size="large">mdi-facebook</v-icon>
                              </v-btn>
                              <v-btn depressed variant="outlined" color="grey-lighten-2">
                                <v-icon color="light-blue" size="large">mdi-twitter</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                      </v-row>
                    </form>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="d-flex bg-blue justify-center align-center" id="rounded-Col">
                  <div class="text-center;padding: 180px 0; justify-center align-center">
                    <v-card-text class="text-white align-center">
                      <div class="text-center text-h5 font-weight-bold">Don't have an account yet?</div>
                      <div class="text-center text-subtitle-1">
                          Let's get you all set up so you can start creating your first <br>
                          onboarding experience
                      </div>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile variant="outlined" dark @click="step++">Sign up</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
                <v-row>
                <v-col cols="12" sm="6" class="d-flex bg-blue justify-center align-center" id="rounded-Col2">
                  <div class="text-center; padding: 180px 0; justify-center align-center">
                    <v-card-text class="text-white">
                      <div class="text-center text-h5 font-weight-bold">Already Signed up?</div>
                      <div class="text-center text-subtitle-1">Log in to your account so you can continue building and <br>
                      editing your onboarding flows
                      </div>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile variant="outlined" dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <h2 class="text-center text-h5 font-weight-bold">Sign up for an account</h2>
                    <h4 class="text-center text-grey">Let's get you all set up so you can start creating your<br>
                      first onboarding experience
                    </h4>
                    <v-form @submit.prevent>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field label="First Name" dense color="blue" autocomplete="false" class="mt-4" hint="Enter your first name to access this website"
                            :rules="rules"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field label="Last Name" dense color="blue" autocomplete="false" class="mt-4" hint="Enter your last name to access this website"
                            :rules="rules"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-col cols="12" sm="12">
                          <v-text-field v-model="emailDefaultValue"
                            label="Email" dense color="blue" autocomplete="false" class="mt-16" type="email" 
                            hint="Enter your email to access this website" placeholder="your@email.com" :rules="rules"></v-text-field>
                        <v-text-field v-model="passwordDefaultValue"
                            label="Password" outlined dense color="blue" autocomplete="false" :append-inner-icon="marker ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="passwordVisible ? 'text' : 'password'" class="mt-16" hint="Enter your password to access this website" 
                            placeholder="Password" @click:append-inner="togglePasswordVisibility" :rules="rules"></v-text-field>
                        <v-row>
                          <v-col cols="12" class="d-flex justify-space-between align-center">
                                <v-checkbox label="I accept the AAE" color="blue" hide-details v-model="enabled"></v-checkbox>
                                <span class="caption text-blue">Terms & Conditions</span>
                            </v-col>
                        </v-row>  
                        <v-btn color="blue" dark block tile type="submit" :disabled="!enabled" >Login</v-btn>
                        <h5 class="text-center text-grey mt-4 mb-3">Or log in using</h5>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                          <v-btn depressed variant="outlined" color="grey-lighten-2">
                            <v-icon color="red" size="large">mdi-google</v-icon>
                          </v-btn>
                          <v-btn depressed variant="outlined" color="grey-lighten-2">
                            <v-icon color="blue" size="large">mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn depressed variant="outlined" color="grey-lighten-2">
                            <v-icon color="light-blue" size="large">mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                        </v-col>                       
                      </v-col>
                    </v-row>
                  </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      marker: true,
      passwordVisible: false,
      emailDefaultValue: '',
      passwordDefaultValue: '',
      enabled: false,
      rules: [
      value => {
          if (value) return true

          return 'You must enter your data.'
        },
      ],
      step: 1,
    };
  },
  methods: {
    login() {
      console.log("oi")
    },

    togglePasswordVisibility() {
        this.marker = !this.marker
        this.passwordVisible = !this.passwordVisible
      },
  },
  props: {
    source: String,
  },
}
</script>

<style scoped>
.v-app .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-app .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}

#rounded-Col {
  border-radius: 0% 0% 0% 50%;
}

#rounded-Col2 {
  border-radius: 0% 0% 50% 0%;
}
</style>