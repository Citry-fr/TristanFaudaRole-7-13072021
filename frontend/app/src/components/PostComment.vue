<template>
    <div class="post">
        <h2 class="post__title">Poster un commentaire :</h2>
        <div class="post__input">
            <textarea  class="post__input__text" name="comment" id="comment" cols="30" rows="10" @change="modifyComData" v-model="text" @click="clearText"></textarea>
            <Bouton class="post__input__button" text="Poster" v-on:submit="postCom" :valid="comData.text === ''"/>
        </div>
    </div>
</template>

<script>

/*
    Composant qui contient une textarea et un bouton pour poster un commentaire sur un gif
*/

import Bouton from '../components/Bouton.vue';
import { mapActions, mapState } from 'vuex'

export default {
    name: 'PostComment',
    components: {
        Bouton
    },
    data() {
        return {
            text: "Écrivez votre commentaire !"
        }
    },
    methods: {
        ...mapActions(['postCom']),
        modifyComData() {
            this.$store.commit('MODIFY_COM_DATA');
        },
        clearText(){
            this.text = "";
        }
    },
    computed: {
        ...mapState(['comData']),
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