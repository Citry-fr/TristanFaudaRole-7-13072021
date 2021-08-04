<template>
  <div>
      <ModifCom/>
  </div>
</template>

<script>

// View qui affiche le forumlaire pour permettre la modification de commentaire

import {mapActions} from 'vuex';
import ModifCom from '../components/ModifCom.vue'

export default {
    components: {
        ModifCom
    },
    methods: {
        ...mapActions(['getOneCom']),
    },
    beforeMount(){
        this.getOneCom();
    }

}
</script>

<style>

</style>