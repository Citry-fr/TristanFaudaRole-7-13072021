<template>
  <div>
      <span>|</span>
      <router-link class="router" to="/admin/comment">Commentaires</router-link>
      <span>|</span>
      <router-link class="router" to="/admin/user">Utilisateurs</router-link>
      <span>|</span>
      <router-view/>
  </div>
</template>

<script>

// Composant router pour la partie Admin

export default {
 name: 'AdminRouter'
}
</script>

<style lang="scss" scoped>
    div{
       margin-top: 30px; 
    }
    .router{
        text-decoration: none;
        font-size: 1.2em;
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
        &.router-link-exact-active{
            color:red;
        }
    }
</style>