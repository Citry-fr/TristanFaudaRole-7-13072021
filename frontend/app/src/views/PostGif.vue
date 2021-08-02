<template>
    <div>
        <p class="userErr" v-if="checkUser()">Vous devez être connecter pour voir cette page</p>
        <div v-else>
            <h1>Poster un gif</h1>
            <PostGifForm />
            <Bouton text="Poster" class="bouton" :valid="checkField()" v-on:submit="postGif"/>
        </div>
        
    </div>    
</template>

<script>

import PostGifForm from '../components/PostGifForm.vue'
import Bouton from '../components/Bouton.vue'

import { mapState, mapActions } from 'vuex';

export default {
    name: 'PostGif',
    components: {
        PostGifForm,
        Bouton
    },
    methods: {
        ...mapActions([ 'postGif' ]),
        checkUser() {
            return localStorage.getItem('User') === null;
        },
        checkField() {
            return (this.gifData.name === '' || this.gifData.gif === '');
        }
    },
    computed: {
        ...mapState([ 'gifData' ]),
    }
}
</script>

<style lang="scss">
    .userErr{
        color: #FD2D01;
    }

    .bouton{
        margin-top: 30px;
    }
</style>