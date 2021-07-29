<template>
  <div id="app">    
    <div id="nav">
      <div>
        <span>|</span>
        <router-link to="/">Les Gifs</router-link>
        <span>|</span>
        <router-link to="/postgif">Poster un Gif</router-link>
        <span>|</span>
        <router-link to="/admin" v-if="rankChecker">Admin</router-link>
        <span v-if="rankChecker">|</span>
      </div>
      <img src="./assets/icon-left-font-monochrome-black.svg" alt="logo Groupomania">
      <div>
        <p v-if="!logChecker">Bienvenue {{ getUserName }} !</p>
        <span>|</span>
        <router-link to="/login" v-if="logChecker">Se connecter</router-link>
        <a href="/" @click="disconnect" v-if="!logChecker">Déconnexion</a>
        <span>|</span>
        <router-link to="/signup" v-if="logChecker">S'inscrire</router-link>
        <span v-if="logChecker">|</span>
      </div>

      
    </div>
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  width: 250px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
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
  margin: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.3em;
}

#nav a.router-link-exact-active {
  color: #FD2D01;
}

span{
  color: #FD2D01;
  font-size: 1.5em;
}

p {
  font-weight: bold;
}
</style>

<script>

const ADMIN_RANK = 1;


export default {
  methods: {
    disconnect(){
      localStorage.removeItem('User');
      location.reload();
    }
  },
  computed: {
    rankChecker(){
      const rank = parseInt(localStorage.getItem('rank'));
      return rank === ADMIN_RANK;
    },
    logChecker(){
      return localStorage.getItem('User') === null;
    },
    getUserName(){
      const data = JSON.parse(localStorage.getItem('User'));
      return `${data.firstname} ${data.lastname}`;
    }    
  }
}
</script>