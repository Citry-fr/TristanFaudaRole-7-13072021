<template>
  <div>
    <router-link to="/" class="back">Retour</router-link>
    <h1>{{this.oneGif.name}}</h1>
    <img :src="this.oneGif.gifUrl" :alt="this.oneGif.name" class="gif">
    <div>
      <PostComment />
    </div>
    <div>
      <Comment class="com" />
    </div>
  </div>  
</template>

<script>
import Comment from '../components/Comment.vue';
import PostComment from '../components/PostComment.vue';
import {mapActions, mapState} from 'vuex';

export default {
  components: {
    Comment,
    PostComment
  },
  methods: {
    ...mapActions(['getOneGif']),
  },
  computed: {
    ...mapState(['oneGif']),    
  },
  beforeMount() {
    this.getOneGif();
  }
}
</script>

<style scoped lang="scss">
  .gif{
    width: 650px;
    height: 365px;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid #2c3e50;
  }
  .back{
    position: absolute;
    display: flex;
    margin-left: 10%;
    position: fixed;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.3em;
    color: #2c3e50;
    border: 2px solid #2c3e50;
    padding: 10px;
    border-radius: 10px;
    &:hover{
      color: #FD2D01;
      border-color: #FD2D01;
    }
  }

  .com{
    margin-top: 30px;
  }
</style>