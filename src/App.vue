<template>
  <nav v-if="!isAuthenticated">
    <router-link to="/">login</router-link> |
    <router-link to="/register">register</router-link> |
    <router-link to="/board">board</router-link>
  </nav>
  <nav v-else>
    <a @click="logout()">logout</a> |
    <router-link to="/board">board</router-link>
  </nav>
  <div class="container">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { mapState } from 'vuex'
import VueCookies from 'vue-cookies'

export default {
  computed: {
    ...mapState('user', ['isAuthenticated'])
  },
  mounted() {
    console.log('why '+this.isAuthenticated);
  },
  methods: {
    logout() {
      VueCookies.remove('accessToken');
      this.$store.commit('user/logoutToken')
      this.$router.push('/');
    }
  },

}
</script>