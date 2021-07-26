<template>
    <div>
        <h1>Formulaire d'inscription</h1>
        <SignupForm ref="form" />
        <Bouton text="S'inscrire" class="bouton" v-on:submit="getFormData" v-on:disable="getFormValid" :disabled="!valid"/>
    </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue';
import Bouton from '../components/Bouton.vue';

const myHeader = new Headers();

myHeader.append('Content-Type', 'application/json');

export default {
    name: 'Signup',
    components: {
        SignupForm,
        Bouton
    },
    data() {
        return {
            valid: false
        };
    },
    methods: {
        getFormValid() {
            this.valid = this.$refs.form.getValid();
            console.log(this.valid);
        },
        getFormData() {            
            const data = this.$refs.form.getData();
            const body = {
                ...data,
                rank: 0
            };
            const requestOptions = {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(body),
                redirect: 'follow'
            };
            console.log(requestOptions.body);

            /*fetch("http://localhost:3000/api/auth/signup", requestOptions,)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));*/
        }
    }
}
</script>

<style lang="scss" scoped>
    .bouton{
        margin-top: 20px;
    }
</style>