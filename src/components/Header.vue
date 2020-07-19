<template>
    <v-app-bar app color="indigo darken-4" right>
        <v-spacer></v-spacer>
        <v-btn text rounded to="/">Home</v-btn>
        <v-btn text rounded to="/dashboard">Dashboard</v-btn>
        <v-btn text rounded @click="logout">Logout</v-btn>
    </v-app-bar>
</template>

<script>
import { authComputed } from '../vuex/helpers.js'

export default {
    data() {
        return {}
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    },
    computed: {
    ...authComputed
    },
}
</script>

<style lang="scss" scoped>

</style>