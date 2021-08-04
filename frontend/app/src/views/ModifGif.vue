<template>
  <div>
      <ModifGifForm class="form"/>
      <Bouton class="bouton" text="Modifier" v-on:submit="modifyGif"/>
  </div>
</template>

<script>

// Views qui affiche le formulaire pour modifier un gif

import ModifGifForm from '../components/ModifGifForm.vue';
import Bouton from '../components/Bouton.vue';

import { mapState, mapActions } from 'vuex'

export default {
    name: 'ModifCom',
    components: {
        ModifGifForm,
        Bouton
    },
    methods: {
        ...mapActions(['modifyGif']),
    },
    computed: {
        ...mapState(['gifData']),
    }
}
</script>

<style scoped lang="scss">
    .form{
        margin-top: 30px;
    }
</style>