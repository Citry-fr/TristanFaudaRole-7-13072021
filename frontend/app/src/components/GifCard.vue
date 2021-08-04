<template>
  <div class="card">      
    <div class="card__gifbox">
        <img :src="gifUrl" alt="gif" class="card__gifbox__gif">
    </div>    
    <div class="card__infos">
        <h2 class="card__infos__title">{{ name }}</h2>
        <div class="card__infos__side">
            <p class="card__infos__side__author">{{`${firstname} ${lastname}`}}</p>
            <p class="card__infos__side__coms"><font-awesome-icon icon="comments" class="card__infos__side__coms__icon"/>{{ com }}</p>
        </div>
    </div>
  </div>
</template>

<script>
/*
    Composant qui affiche les gif sur la page allGifs, elle montre le créateur du gif, son nom ainsi que le nombre de commentaire validé pour le gif
*/
export default {
    name: 'GifCard',
    props :{
        name: String,
        firstname: String,
        lastname: String,
        com: Number,
        gifUrl: String
    }

}
</script>

<style lang="scss" scoped>
    .card{
        width: 400px;
        height: 310px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 15px;
        border: 2px solid #2c3e50;
        padding: 0;
        &__infos {
            display: flex;
            justify-content: space-between;
            &__title{
                align-self: center;
                padding-left: 10px;
            }
            &__side{
                padding-right: 10px;
                &__coms{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;
                    
                }
            }
        }
        &__gifbox {
            width: 400px;
            height: 220px;
            &__gif {
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-radius: 12px 12px 0 0;
                border-bottom: #2c3e50 2px solid;
            }
        }
       
    }
</style>