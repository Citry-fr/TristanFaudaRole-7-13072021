<template>
  <div v-if="!checkUser()">
    <h1>Voici tout les gifs</h1>
    <div class="cardDiv">
      <router-link :to="{name: 'Gif', params: {id: gif.id}}" v-for="gif in allGifs" v-bind:key="gif.id" class="cardDiv__link">
        <GifCard class="cardDiv__link__gifCards" :name="gif.name" :firstname="gif.user.firstname" :lastname="gif.user.lastname" :com="gif.comments.length" :gifUrl="gif.gifUrl"/>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p class="userErr">Vous devez être connecter pour voir cette page</p>
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
    checkUser() {
      return localStorage.getItem('User') === null;
    },
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
    &__link{
      text-decoration: none;
      color: #2c3e50;
      &__gifCards {
      margin-top: 10px;
      }
    }
    
  }
</style>

