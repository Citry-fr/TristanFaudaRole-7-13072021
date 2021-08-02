<template>
  <div class="comCard">      
      <div class="comCard__text">
            <p class="comCard__text__user">{{`${firstname} ${lastname}`}} :</p>
            <p class="comCard__text__com"><span class="comCard__com__dash">-</span> {{ text }}</p>
      </div>
      <div class="comCard__button" v-if="isAuthor">
          <button class="comCard__button__del" @click="submitEvent">Supprimer</button>
          <router-link :to="{name: 'Com', params: {id: comId}}" class="comCard__button__modif">Modifier</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        firstname: String,
        lastname: String,
        text: String,
        isAuthor: Boolean,
        comId: Number
    },
    methods:{
        submitEvent() {
            this.$emit('submit');
        }
    }
}
</script>

<style scoped lang='scss'>
    .comCard {
        display: flex;
        padding: 20px;
        width: 650px;
        margin: auto;
        background: #d6d6d6;
        border-radius: 20px;
        border: 2px solid #2c3e50;
        gap: 20px;
        &__text {
            width: 550px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            &__user{
                margin-top: 0;
                font-weight: bolder;
                font-size: 1.2em;
                text-decoration-line: underline;
                text-decoration-color: #FD2D01;
            }
            &__com{
                margin: 0;
                margin-left: 40px;
                &__dash{
                    color: #FD2D01;
                }
            }
        }
        &__button{
            display: flex;
            flex-direction: column;
            gap: 5px;
            &__del{
                padding: 8px 10px;
                font-weight: bold;
                font-family: 'Nunito', sans-serif;
                border: 2px solid #FD2D01;
                color: #FD2D01;
                border-radius: 10px;
                width: 86px;
                cursor: pointer;
                font-size: 0.9em;
                &:hover{
                    background-color: lightcoral;
                    color: red;
                }
            }
            &__modif{
                padding: 8px 10px;
                font-weight: bold;
                font-family: 'Nunito', sans-serif;
                border: 2px solid #2c3e50;
                color: #2c3e50;
                border-radius: 10px;               
                cursor: pointer;
                font-size: 0.9em;
                text-decoration: none;
                background-color: white;
                &:hover{
                    color: #FD2D01;
                    border-color: #FD2D01;
                }
            }
        }
    }
</style>