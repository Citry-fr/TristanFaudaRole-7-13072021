<template>
    <div class="post">
        <h2 class="post__title">Poster un commentaire :</h2>
        <div class="post__input">
            <textarea class="post__input__text" name="comment" id="comment" cols="30" rows="10">Écrivez votre commentaire !</textarea>
            <Bouton class="post__input__button" text="Poster"/>
        </div>
    </div>
</template>

<script>
import Bouton from '../components/Bouton.vue'

export default {
    components: {
        Bouton
    }
}
</script>

<style scoped lang='scss'>
    .post{
        &__input{
            display: flex;
            justify-content: center;
            gap: 30px;
            align-items: center;            
            &__text{
                height: 80px;
                resize: none;
            }
        }
        &__title{
            text-decoration-line: underline;
            text-decoration-color: #FD2D01;
        }
    }
</style>