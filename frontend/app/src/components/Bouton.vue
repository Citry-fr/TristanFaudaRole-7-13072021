<template>
    <div>
        <button class="btn" :disabled="valid">{{text}}</button>
    </div>
</template>

<script>

export default {
    name: 'Bouton',
    props: {
        text: String,
        valid: Boolean
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
    .btn {
        width: 200px;
        height: 50px;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 1.5em;
        border-radius: 10px;
        border: 2px solid #2c3e50;
        background-color: white;
        color: #2c3e50;
        &:active{
            border-color: #FD2D01;
            color: #FD2D01;
        }
        &:disabled{
            border-style: dashed;
        }
    }
</style>