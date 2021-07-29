<template>
    <p class="userErr" v-if="checkUser">Vous devez être connecter pour voir cette page</p>
</template>

<script>
export default {
    methods: {
        checkUser() {
            return localStorage.getItem('User') === null;
        }
    }
}
</script>

<style lang="scss">
    .userErr{
        color: #FD2D01;
    }
</style>