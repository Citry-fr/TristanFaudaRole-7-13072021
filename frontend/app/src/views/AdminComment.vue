<template>
  <div>
      <AdminRouter />
      <p>rbguhrebghreighrez</p>
  </div>
</template>

<script>
import AdminRouter from '../components/AdminRouter.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        AdminRouter
    },
    methods: {
        ...mapActions(['getPendingComs']),
    },
    beforeMount() {
        this.getPendingComs();
    }

}
</script>

<style>

</style>