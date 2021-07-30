<template>
  <div>
    <h1>Voici tout les gifs</h1>
    <div class="cardDiv">
      <GifCard class="cardDiv__gifCards" v-for="gif in allGifs" v-bind:key="gif.id"/>
    </div>
  </div>
</template>

<script>
import GifCard from '../components/GifCard.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AllGifs',
  components: {
    GifCard
  },
  methods: {
    ...mapActions(['getAllGifs']),
  },
  computed : {
    ...mapState(['allGifs']),
  },
  beforeMount() {
    this.getAllGifs();
  }
}
</script>

<style lang="scss" scoped>
  .cardDiv{
    margin: 0;    
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    &__gifCards {
      margin-top: 10px;
    }
  }
</style>

