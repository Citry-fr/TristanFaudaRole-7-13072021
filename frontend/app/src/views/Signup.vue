<template>
    <div>
        <h1>Formulaire d'inscription</h1>
        <SignupForm ref="form" />
        <Bouton text="S'inscrire" class="bouton" :valid="!getValid()"/>
    </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue';
import Bouton from '../components/Bouton.vue';

import { mapState } from 'vuex';

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
        }
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