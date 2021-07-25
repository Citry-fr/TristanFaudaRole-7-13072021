<template>
  <div id="app">    
    <div id="nav">
      <div>
        <router-link to="/">Les Gifs</router-link>
        <router-link to="/postgif">Poster un Gif</router-link>
        <router-link to="/admin" v-if="rankChecker">Admin</router-link>
      </div>
      <img src="./assets/icon-left-font-monochrome-black.svg" alt="logo Groupomania">
      <div>
        <router-link to="/login">Se connecter</router-link>
        <router-link to="/signup">S'inscrire</router-link>
      </div>

      
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

img {
  width: 250px;
  position: fixed;
}

#nav {
  display: flex;
  justify-content: space-around;
  border-bottom: #2c3e50 2px solid;
  padding: 30px 0 30px 0;
  align-items: center;
}

#nav div{
  display: flex;
  gap: 15px;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FD2D01;
}
</style>

<script>

const ADMIN_RANK = 1;


export default {
  computed: {
    rankChecker(){
      const rank = parseInt(localStorage.getItem('rank'));
      return rank === ADMIN_RANK;
    }
  }
}
</script>