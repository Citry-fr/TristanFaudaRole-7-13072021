<template>
    <div>
        <h1>Formulaire d'inscription</h1>
        <SignupForm ref="form" />
        <Bouton text="S'inscrire" class="bouton" :valid="formFullValid"/>
    </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue';
import Bouton from '../components/Bouton.vue';
import {  mapState } from 'vuex';

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
    },
    computed: {
        ...mapState(['formFullValid']),
    }
}
</script>

<style lang="scss" scoped>
    .bouton{
        margin-top: 20px;
    }
</style>