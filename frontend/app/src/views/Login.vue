<template>
    <div>
        <h1>Connection</h1>
        <LoginForm />
        <Bouton text="Connection" class="bouton" :valid="loginData.email === '' || loginData.password === ''" v-on:submit="postLogin"/>
    </div>
</template>

<script>

import LoginForm from '../components/LoginForm.vue';
import Bouton from '../components/Bouton.vue';
import { mapState, mapActions } from 'vuex'

export default {
    name: "Login",
    components: {
        LoginForm,
        Bouton
    },
    methods: {
        ...mapActions(['postLogin'])
    },
    computed: {
        ...mapState(['loginData']),
    }
}
</script>

<style lang="scss" scoped>
    .bouton{
        margin-top: 30px;
    }
</style>