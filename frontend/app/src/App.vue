<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Les Gifs</router-link>
        <router-link to="/postgif">Poster un Gif</router-link>
      </div>
      <div>
        <router-link to="/login">Se connecter</router-link>
        <router-link to="/signup">S'inscrire</router-link>
      </div>

      <router-link to="/administration" v-if="rankChecker">Admin</router-link>
    </div>
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

#nav {
  display: flex;
  padding: 30px;
  justify-content: space-around;
  border-bottom: #2c3e50 2px solid;
}

#nav div{
  display: flex;
  gap: 15px
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

const ADMIN_RANK = 1;

export default {
  computed: {
    rankChecker(){
      const rank = localStorage.getItem('rank');
      return rank === ADMIN_RANK;
    }
  }
}
</script>