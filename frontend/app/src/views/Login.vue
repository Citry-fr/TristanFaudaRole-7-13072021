<template>
    <div>
        <h1>Connection</h1>
        <LoginForm />
        <Bouton text="Connection" class="bouton"/>
    </div>
</template>

<script>

import LoginForm from '../components/LoginForm.vue';
import Bouton from '../components/Bouton.vue';

export default {
    name: "Login",
    components: {
        LoginForm,
        Bouton
    }
}
</script>

<style lang="scss" scoped>
    .bouton{
        margin-top: 30px;
    }
</style>