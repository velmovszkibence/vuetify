<template v-if="loggedIn">
  <v-container fluid>
    <v-row>
      <v-col style="max-height: 500px" class="video-container" cols="12" sm="12" md="8" background-color="primary">
        <v-card>
          <video controls width="100%">
            <source src="#" type="video/mp4">
            Sorry your browser doesn't support embedded videos.
          </video>
        </v-card>
      </v-col>
      <v-col class="card-list" cols="12" md="4" sm="12">
        <v-card class="mx-auto">
          <v-app-bar dark color="pink">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>My Music</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>

          <v-container>
            <v-row dense style="max-height: 500px" class="overflow-y-auto"> 
              <VideoCard v-for="video in video.videos" :key="video.id" :video="video"></VideoCard>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
  import VideoCard from '@/components/VideoCard.vue'
  import { mapState } from 'vuex'
  

  export default {
    components: {
      VideoCard
    },
    data () {
      return {}
    },

    computed: {
      ...mapState(['video']),
    },

  }
</script>

<style lang="scss" scoped>

</style>