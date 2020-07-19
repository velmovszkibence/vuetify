<template>
	<v-app>
		<template v-if="loggedIn">
			<Header></Header>
		</template>
		<v-main>
			<transition name="slide-fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</v-main>
		<template v-if="isHome">
			<Footer></Footer>
		</template>
	</v-app>
</template>

<script>

import { authComputed } from './vuex/helpers.js'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	data() {
		return {
			
		}
	},
	computed: {
	...authComputed,
	isHome() {
		return this.$route.name === 'Home'
	}
	},


}
</script>

<style>

@import url("https://fonts.googleapis.com/css?family=Material+Icons");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.slide-fade-leave-to {
  opacity: 0;
}

</style>