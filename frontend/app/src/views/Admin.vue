<template>
  <div>
      <AdminRouter />
      <div class="instruction">
        <h1>Bienvenue sur la page d'Administration !</h1>
        <p>Cliquer sur Commentaires dans le menu de navigation pour accéder au commentaire en attente de validation.</p>
        <p>Cliquer sur Utilisateurs dans le menu de navigation pour gérer les différents utilisateurs</p>
      </div>

  </div>
</template>

<script>
import AdminRouter from '../components/AdminRouter.vue';

export default {
    components: {
        AdminRouter
    }

}
</script>

<style lang="scss" scoped>
    .instruction{
        margin-top: 50px;
    }
</style>