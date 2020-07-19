<template>
    <v-container fluid :class="'home-container '+ padding0">
      <v-container :class="padding0">
        <v-card :class="cardMargin" light tile height="100%">
          <v-img src="../assets/images/gym.jpg" class="bg-image">
            <v-row align="center" style="height: 100%">
              <v-col>
              <div class="heading-btn text-center">
                <v-btn-toggle rounded>
                <v-btn class="btn-start" to="/signup">
                  <v-card-text>Start now!</v-card-text>
                </v-btn>

                <v-btn class="v-btn--active">
                  <v-card-text>More info</v-card-text>
                </v-btn>
                </v-btn-toggle>
              </div>
              </v-col>    
            </v-row>
          </v-img>

          <v-row no-gutters class="mb-5">
            <template v-for="card in cards">
              <v-col :key="card.id" class="d-block" cols="12" md="3" lg="3">
              <v-card class="pa-2 d-flex flex-column" :style="{ background: card.background }" tile flat>
                <v-icon class="material-icons sport-icons" dark>
                  {{ card.icon }} 
                </v-icon>
                <v-card-title class="mx-auto">
                  {{ card.title }}
                </v-card-title>
                <v-card-text>
                  {{ card.description }}
                </v-card-text>
              </v-card>
              </v-col>
            </template>
          </v-row>

          <v-card-title>
            <h2 class="mx-auto mt-5">Meet Trainers</h2>
          </v-card-title>
          <v-card-text align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo expedita cumque pariatur doloribus repellat neque est ex officia debitis voluptatem.
          </v-card-text>
          <v-row no-gutters class="mt-5 mb-5 d-flex justify-space-around">
            <v-card class="pa-2 coach-img" width="200px" height="200px" flat>
              <v-img src="../assets/images/coach2.png" contain height="100%"></v-img>
            </v-card>
            <v-card class="pa-2 coach-img" width="200px" height="200px" flat>
              <v-img src="../assets/images/coach1.png" contain height="100%"></v-img>
            </v-card>
            <v-card class="pa-2 coach-img" width="200px" height="200px" flat>
              <v-img src="../assets/images/coach3.png" contain height="100%"></v-img>
            </v-card>
          </v-row>

          <v-container mt-5 class="about-us pb-0">
          <v-card-title>
            <h2 class="mx-auto">About our fitness</h2>
          </v-card-title>
          <v-card-text align="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo expedita cumque pariatur doloribus repellat neque est ex officia debitis voluptatem.
          </v-card-text>

          <v-row class="justify-space-around">
          <v-col cols="12" md="6" :class="padding0">
            <v-tabs grow>
              <v-tab>About Us</v-tab>
              <v-tab-item>
                <v-card flat tile >
                  <v-card-text>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero enim dicta esse placeat sequi assumenda officiis doloribus nihil, cum consectetur non unde quidem ullam tenetur delectus incidunt quae quibusdam amet impedit fuga est obcaecati porro? Amet, nisi quos, asperiores, commodi id soluta aliquam debitis maxime rem ducimus voluptatem excepturi expedita autem officia veniam doloremque ea totam eos perferendis ab enim?</p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab>Our Mission</v-tab>
              <v-tab-item>
                <v-card flat tile >
                  <v-card-text>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero enim dicta esse placeat sequi assumenda officiis doloribus nihil, cum consectetur non unde quidem ullam tenetur delectus incidunt quae quibusdam amet impedit fuga est obcaecati porro? Amet, nisi quos, asperiores, commodi id soluta aliquam debitis maxime rem ducimus voluptatem excepturi expedita autem officia veniam doloremque ea totam eos perferendis ab enim?</p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab>Our Vision</v-tab>
              <v-tab-item>
                <v-card flat tile >
                  <v-card-text>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero enim dicta esse placeat sequi assumenda officiis doloribus nihil, cum consectetur non unde quidem ullam tenetur delectus incidunt quae quibusdam amet impedit fuga est obcaecati porro? Amet, nisi quos, asperiores, commodi id soluta aliquam debitis maxime rem ducimus voluptatem excepturi expedita autem officia veniam doloremque ea totam eos perferendis ab enim?</p>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-col>
          </v-row>
          </v-container>
        </v-card>

      </v-container>
    </v-container>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {

      cards: [
        {
          id: 1,
          icon: 'directions_run',
          title: 'Running',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quas quae dolor neque ratione dolores enim aliquam cumque possimus autem!',
          background: '#64B5F6'
        },
        {
          id: 2,
          icon: 'fitness_center',
          title: 'Weight-lifting',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quas quae dolor neque ratione dolores enim aliquam cumque possimus autem!',
          background: '#FFD54F'      
        },
        {
          id: 3,
          icon: 'directions_bike',
          title: 'Cycling',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quas quae dolor neque ratione dolores enim aliquam cumque possimus autem!',
          background: '#00BCD4'
        },
        {
          id: 4,
          icon: 'pool',
          title: 'Swimming',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quas quae dolor neque ratione dolores enim aliquam cumque possimus autem!',
          background: '#B388FF'
        }
      ]
    }
  },
  computed: {
    cardMargin() {
      return !this.$vuetify.breakpoint.xs ? "mx-auto mt-5" : "mx-auto mt-0"
    },
    padding0() {
      return !this.$vuetify.breakpoint.xs ? "" : "pa-0"
    }
  }
  
}

</script>

<style>
  .home-container {
    height: 100%;
    background: linear-gradient(to bottom, #2196F3, #3F51B5, #7C4DFF);
  }
  .bg-image {
    max-height: 500px;
    opacity: 1;
  }
  .white-text {
    color: #fff;
  }
  .btn-start {
    background: #00BCD4 !important;
    opacity: 1 !important;
  }
  .sport-icons {
    font-size: 55px;
    border: 3px solid #fff;
    border-radius: 50% !important;
    width: 100px;
    margin: 20px auto;
    padding: 20px;
  }
  .about-us {
    background: #f8f5f5;
  }
  .coach-img {
    border: 1px solid red;
  }
  .v-slide-group__prev {
    display: none !important;
  }
</style>