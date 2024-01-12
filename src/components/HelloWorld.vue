<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12">
                    <div class="text-center text-h4">Login in to your account</div>
                    <div class="text-center text-subtitle-2 text-grey">Log in to your account so you can continue building
                      <br>and editing your onboarding flows
                    </div>
                    <v-form @submit.prevent>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                            <v-text-field v-model="emailDefaultValue"
                            label="Email" outlined dense color="blue" autocomplete="false" class="mt-16" type="email" 
                            hint="Enter your email to access this website" placeholder="your@email.com" required></v-text-field>
                            <v-text-field v-model="passwordDefaultValue"
                            label="Password" outlined dense color="blue" autocomplete="false" :append-inner-icon="marker ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="passwordVisible ? 'text' : 'password'" class="mt-16" hint="Enter your password to access this website" 
                            placeholder="Password" @click:append-inner="togglePasswordVisibility" required></v-text-field>
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox label="Remember me" class="mt-n1" color="blue"></v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
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
                    </v-form>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="bg-blue justify-center align-center" id="rounded-Col">
                  <div class="text-center;padding: 180px 0; justify-center align-center">
                    <v-card-text class="text-white align-center">
                      <h3 class="text-center">Don't have an account yet?</h3>
                      <h6 class="text-center">
                          Let's get you all set up so you can start creating your first <br>
                          onboarding experience
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile variant="outlined" dark @click="step++">Sign up</v-btn>
                    </div>
                  </div>
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
      step: 1,
    };
  },
  methods: {
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
  border-radius: 0% 00% 0% 50%;
}
</style>