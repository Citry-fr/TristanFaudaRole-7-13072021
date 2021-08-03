<template>
  <div>
    <router-link to="/" class="back">Retour</router-link>
    <h1>{{this.oneGif.name}}</h1>
    <div class="gifBox" >
      <img :src="oneGif.gifUrl" :alt="oneGif.name" class="gifBox__gif">
      <div class="gifBox__button" v-if="checkId || rankChecker">
        <button class="gifBox__button__del" @click="deleteGif" >Supprimer</button>
        <router-link :to="{name: 'ModifGif', params: {id: oneGif.id}}" class="gifBox__button__modif">Modifier</router-link>
      </div>

    </div>    
    <div>
      <PostComment />
    </div>
    <div class="allComs">
      <div v-for="comment in oneGif.comments" v-bind:key="comment.id">
        <Comment 
          class="com"
          :firstname="comment.user.firstname"
          :lastname="comment.user.lastname"
          :text="comment.text"
          v-on:submit="deleteCom(comment.id)"
          :isAuthor="comment.userId === getId"
          :comId="comment.id"
          v-if="comment.status === 1 || comment.userId == getId"
          :isAccepted="comment.status === 0"
        />
      </div>
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
  data() {
    return {
      gifId: this.getGifId,
    }
  },
  methods: {
    ...mapActions(['getOneGif', 'deleteGif', 'deleteCom']),
    deleteCom(comId){
      const user = JSON.parse(localStorage.getItem('User'))
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "userId": 1
      });

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      console.log(comId);

      fetch(`http://localhost:3000/api/com/${comId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          window.location.reload();
        })
        .catch(error => console.log('error', error));
    },
  },
  computed: {
    ...mapState(['oneGif']),
    checkId() {
      const user = JSON.parse(localStorage.getItem('User'));
      return this.oneGif.userId === user.userId;
    },
    rankChecker(){
      if(localStorage.getItem('User') !== null){
        const data = JSON.parse(localStorage.getItem('User'));
        return data.rank === 1;
      } else {
        return 0;
      }
    },
    getId() {
      const user = JSON.parse(localStorage.getItem('User'));
      return user.userId;
    },
  },
  beforeMount() {
    this.getOneGif();
  }
}
</script>

<style scoped lang="scss">
  
  .back{
    position: absolute;
    display: flex;
    margin-left: 10%;
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
  .allComs{
    display: flex;
    flex-direction: column-reverse;
  }
  .gifBox{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    &__gif{
      width: 650px;
      height: 365px;
      object-fit: cover;
      border-radius: 10px;
      border: 2px solid #2c3e50;
    }
    &__button{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      &__del{
        padding: 10px;
        font-weight: bold;
        font-family: 'Nunito', sans-serif;
        border: 2px solid #FD2D01;
        color: #FD2D01;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
          background-color: lightcoral;
          color: red;
        }
      }
      &__modif{
        text-decoration: none;
        color: #2c3e50;
        border: 2px solid #2c3e50;
        border-radius: 10px;
        padding: 8px;
        font-weight: bold;
        &:hover{
          border-color: #FD2D01;
          color: #FD2D01;
        }
      }
    }

  }
</style>
