<template>
    <div>
        <h1>Inscription</h1>
        <SignupForm ref="form" />
        <Bouton text="S'inscrire" class="bouton" :valid="!getValid()" v-on:submit="postData"/>
    </div>
</template>

<script>

// View qui affiche le formulaire pour s'inscrire sur le site

import SignupForm from '../components/SignupForm.vue';
import Bouton from '../components/Bouton.vue';

import { mapState, mapActions } from 'vuex';

export default {
    name: 'Signup',
    components: {
        SignupForm,
        Bouton
    },
    data() {
        return {
        }
    },
    methods: {
        getValid() {
            const values = Object.values(this.isValid);
            return !values.some(v => v !== true);
        },
        ...mapActions([ 'postData' ]),
    },
    computed: {
        ...mapState([ 'isValid' ]),        
    }
}
</script>

<style lang="scss" scoped>
    .bouton{
        margin-top: 20px;
    }
</style>