<template>
    <v-col cols="12">
        <v-card :color="video.color" dark @click="clickedVideo(video.id)">
            <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title class="headline" v-text="video.title"></v-card-title>
            </div>

            <v-avatar class="ma-3" size="125" tile>
                <v-img :src="video.image_src"></v-img>
            </v-avatar>
            </div>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        props: {
            video: Object
        },
        methods: {
            clickedVideo(id) {
                this.$emit('clicked', id)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>