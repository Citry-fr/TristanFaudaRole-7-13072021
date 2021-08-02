<template>
    <div class="post">
        <h2 class="post__title">Modifier votre commentaire :</h2>
        <div class="post__input">
            <textarea class="post__input__text" name="comment" id="comment" cols="30" rows="10" @change="modifyComData" :value="oneCom.text"></textarea>
            <Bouton class="post__input__button" text="Modifer" v-on:submit="modifyCom"/>
        </div>
    </div>
</template>

<script>
import Bouton from '../components/Bouton.vue';
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        Bouton
    },
    methods: {
        ...mapActions(['modifyCom']),
        modifyComData() {
            this.$store.commit('MODIFY_COM_DATA');
        }
    },
    computed: {
        ...mapState(['oneCom']),
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