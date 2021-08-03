<template>
  <div id="app">    
    <div id="nav">
      <div id="left">
        <span>|</span>
        <router-link to="/allgifs">Les Gifs</router-link>
        <span>|</span>
        <router-link to="/postgif">Poster un Gif</router-link>
        <span>|</span>
        <router-link to="/admin/" v-if="rankChecker">Admin</router-link>
        <span v-if="rankChecker">|</span>
      </div>
      <img src="./assets/icon-left-font-monochrome-black.svg" alt="logo Groupomania" class="logo">
      <div id="right">
        <p class="welcom" v-if="!logChecker">Bienvenue {{ getUserName }} !</p>
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

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  width: 250px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

#nav {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  border-bottom: #2c3e50 2px solid;
  padding: 30px 0 30px 0;
  align-items: center;
  height: 33px;
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
  font-size: 1.3em;
}

#nav a.router-link-exact-active {
  color: #FD2D01;
}

#nav a.router-link-active {
  color: #FD2D01;
}

span{
  color: #FD2D01;
  font-size: 1.5em;
}

.welcom {
  font-weight: bold;
}

@media (max-width: 1470px) {
  #nav{
    flex-direction: column;
    height: 140px;
    padding-top: 0;
  }
  #left{
    margin-top: 120px;
  }
  .logo{
    transform: translateY(-20px) translateX(-50%)
  }
}
@media (max-width: 420px){
  #left{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
  #right{
    display: flex;
    flex-direction: column-reverse;
    margin-top: 20px;
  }
  #nav{
    height: 260px;
  }
  span{
    display: none;
  }
  .logo{
    transform: translateY(-100px) translateX(-50%)
  }
  .welcom{
    margin-top: 0;
    border-bottom: 2px solid #FD2D01;
  }
  #nav a{
    border-bottom: 2px solid #FD2D01;
  }
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
      if(localStorage.getItem('User') !== null){
        const data = JSON.parse(localStorage.getItem('User'));
        return data.rank === ADMIN_RANK;
      } else {
        return 0;
      }
      
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