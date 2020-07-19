<template>
    <v-container fluid :class="backgroundSwitch">
        <v-card width="400px" class="mx-auto">
            <v-card-title>
                <h1 class="display-1 red--text text--accent-2">Login</h1>
                <v-spacer></v-spacer>
                <v-btn color="info" to="/">
                    <v-icon class="material-icons" dark>home</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form @submit.prevent="login" ref="loginForm">
                    <v-text-field label="Email" v-model="email" prepend-icon="mdi-account-circle" />
                    <v-text-field
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                        label="Password"
                        prepend-icon="mdi-lock"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                    />
                    <v-card-actions class="mt-10">
                    <v-btn color="success" type="submit">Login</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="info" to="/signup">Register</v-btn>
                </v-card-actions>
            </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                showPassword: false,
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                })
                .then( () => {
                    this.$router.push({ name: 'dashboard' })
                })
                .catch(error => {
                    console.log(error.response)
                })
            }
        },
        computed: {
            backgroundSwitch() {
                return !this.$vuetify.breakpoint.xs ? "login-container" : "signin-container"
            }
        }
    }
</script>

<style>

.signin-container {
    height: 100%;
    background: linear-gradient(to bottom, #363636, #646464, #6b6b6b);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.login-container {
    height: 100%;
    background: url('../assets/images/register.jpg') center center/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>