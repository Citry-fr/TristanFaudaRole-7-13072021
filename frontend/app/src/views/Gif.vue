<template>
  <p>Page du gif</p>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  methods: {
    ...mapActions(['getOneGif']),
  },
  beforeMount() {
    this.getOneGif();
  }
}
</script>

<style>

</style>