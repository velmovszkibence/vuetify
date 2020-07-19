<template>
    <v-container fluid :class="backgroundSwitch">
        <v-card width="400px" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1 red--text text--accent-2">Signup</h1>
                <v-spacer></v-spacer>
                <v-btn color="info" to="/">
                    <v-icon class="material-icons" dark>home</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form @submit.prevent="register" ref="signUpForm" v-model="formValidity">
                    <v-text-field label="Username" type="text" v-model="username" :rules="usernameRules" 
                    required prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" 
                    required prepend-icon="mdi-email">
                    </v-text-field>
                    <v-text-field label="Password" type="password" v-model="password" :rules="passwordRules" 
                    required prepend-icon="mdi-lock"></v-text-field>
                    <v-text-field label="Confirm Password" type="password" v-model="confirmpassword" :rules="passwordConfirmRule" 
                    required prepend-icon="mdi-lock"></v-text-field>
                    <v-checkbox 
                        label="Agree to terms & conditions"
                        :rules="agreeToTermsRules" 
                        v-model="agreeToTerms"
                        required>
                    </v-checkbox>
                    <v-card-actions>
                    <v-btn type="submit" color="success" :disabled="!formValidity">Submit</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="info" to="/login">Login</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                username: '',
                email: '',
                password: '',
                confirmpassword: '',
                agreeToTerms: false,
                formValidity: false,
                usernameRules: [
                    value => !!value || 'This field can not be empty!',
                    value => value.length > 4 || 'Username must be atleast 5 character!',
                ],
                agreeToTermsRules: [
                    value => !!value || 'You must agree to terms and conditions to sign up for an account!'
                    // True or error message
                ],
                emailRules: [
                    value => !!value || 'Email is required!',
                    value => value.indexOf('@') !== 0 || 'Email should have a username!',
                    value => value.includes('@') || 'Invalid email!',
                    value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain a valid domain!',
                    value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid domain name!'
                ],
                passwordRules: [
                    value => !!value || 'Password is required!',
                    value => value.length > 7 || 'Password must be atleast 8 character!',
                ],
                passwordConfirmRule: [
                    value => !!value || 'Field is required!',
                    value => value.length > 7 || 'Password must be atleast 8 character!',
                    value => value === this.password || 'Passwords must match!',
                ]
            }
        },
        methods: {
            register() {
                this.$store.dispatch('register', {
                    name: this.username,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmpassword
                })
                .then( () => {
                    this.$router.push({ name: 'dashboard' })
                })
                .catch(error => {
                    console.log(error.response)
                })
            },
        },
        computed: {
            backgroundSwitch() {
                return !this.$vuetify.breakpoint.xs ? "signup-container" : "register-container"
            }
        }
    }
</script>

<style scoped>

.register-container {
    height: 100%;
    background: linear-gradient(to bottom, #363636, #646464, #6b6b6b);
}

.signup-container {
    height: 100%;
    background: url('../assets/images/register.jpg') center center/cover;
}

</style>