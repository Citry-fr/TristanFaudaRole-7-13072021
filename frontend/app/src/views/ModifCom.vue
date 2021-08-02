<template>
  <div>
      <ModifCom/>
  </div>
</template>

<script>
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