<template>
    <v-footer color="bg-purple" padless>
        <v-container fluid>
            <v-container :class="flexOrContents">
                
                <v-list :class="footerWidth">
                    <v-subheader class="justify-center"><h3>Workout & programs</h3></v-subheader>
                    <v-list-item-group class="footer-links">
                        <v-list-item v-for="link in workoutlinks"
                        :key="`${link.label}-footer-link`"
                         class="my-2" :to="link.url">
                        {{ link.label }}
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                
                <v-list :class="footerWidth">
                    <v-subheader class="justify-center"><h3>Support</h3></v-subheader>
                    <v-list-item-group class="footer-links">
                        <v-list-item v-for="link in supportlinks"
                        :key="`${link.label}-footer-link`"
                        class="my-2" :to="link.url">
                        {{ link.label }}
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                
                <v-list :class="footerWidth">
                    <v-list-item-group class="footer-links">
                        <v-list-item class="justify-center"><v-icon large>fab fa-youtube</v-icon></v-list-item>
                        <v-list-item class="justify-center"><v-icon large>fab fa-instagram</v-icon></v-list-item>
                        <v-list-item class="justify-center"><v-icon large>fab fa-twitter</v-icon></v-list-item>
                        <v-list-item class="justify-center"><v-icon large>fab fa-facebook</v-icon></v-list-item>
                    </v-list-item-group>
                </v-list>
               
                </v-container>
            
        </v-container>

            <v-flex indigo darken-4 py-4 text-center white--text xs12>
              Copyright &copy; {{ new Date().getFullYear() }} . <span class="font-italic">All rights reserved</span>
            </v-flex>
    </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                supportlinks: [
                    {
                        label: 'Support Us',
                        url: '/',
                    },
                    {
                        label: 'Contact Us',
                        url: '/',
                    },
                    {
                        label: 'FAQs',
                        url: '/',
                    },
                    {
                        label: 'Location',
                        url: '/',
                    }
                ],
                workoutlinks: [
                    {
                        label: 'Workout Videos',
                        url: '/'
                    },
                    {
                        label: 'Workout Programs',
                        url: '/'
                    },
                    {
                        label: 'Custom Workouts',
                        url: '/'
                    },
                    {
                        label: 'Online Workouts',
                        url: '/'
                    }
                ]
            }
        },
        computed: {
            footerWidth() {
                return !this.$vuetify.breakpoint.xs ? "footer-list bg-purple" : "footer-xs bg-purple"
            },
            flexOrContents() {
                return !this.$vuetify.breakpoint.xs ? "d-flex" : "contents"
            }
        }
    }
</script>

<style scoped>
.bg-purple {
    background: #7C4DFF !important;
}
.footer-list {
    width: 350px;
}
.footer-xs {
    width: 100%;
}
.footer-links a {
    justify-content: center;
    font-size: 0.8rem;
    font-weight: lighter;
    letter-spacing: 0.3em;
}
.footer-links a::before {
    opacity: 0;
    background: #000;
}
</style>