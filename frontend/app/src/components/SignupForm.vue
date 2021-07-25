<template>
    <div class="form">
        <div class="form__email">
            <label class="form__email__label" for="email">Email :</label>
            <input class="form__email__input" type="email" name="email">
        </div>
        <div class="form__password">
            <label class="form__password__label" for="password">Mot de passe :</label>
            <input class="form__password__input" type="password" name="password">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignupForm'
}
</script>

<style lang="scss" scoped>
    .form{
        display: flex;
    }
</style>