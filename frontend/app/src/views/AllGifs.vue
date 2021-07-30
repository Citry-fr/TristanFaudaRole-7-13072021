<template>
  <div class="cardDiv">
    <GifCard class="gifCards"/>
  </div>
  
</template>

<script>
import GifCard from '../components/GifCard.vue';

export default {
  name: 'AllGifs',
  components: {
    GifCard
  }
}
</script>

<style lang="scss" scoped>
  .cardDiv{
    padding: 10%;
  }
</style>

