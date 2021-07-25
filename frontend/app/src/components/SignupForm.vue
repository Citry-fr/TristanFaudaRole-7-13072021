<template>
    <div class="form">
        <div class="form__email">
            <label class="form__email__label" for="email">Email :</label>
            <input class="form__email__input" type="email" name="email" id="email">
        </div>
        <div class="form__password">
            <label class="form__password__label" for="password">Mot de passe :</label>
            <input class="form__password__input" type="password" name="password" id="password">
        </div>
        <div class="form__firstname">
            <label class="form__firstname__label" for="firstname">Prénom :</label>
            <input class="form__firstname__input" type="text" name="firstname" id="firstname">
        </div>
        <div class="form__lastname">
            <label class="form__lastname__label" for="lastname">Nom :</label>
            <input class="form__lastname__input" type="text" name="lastname" id="lastname">
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
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        &__email, &__password, &__firstname, &__lastname{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
              
    }
    label {
        font-weight: bold;
        font-size: 1.5em;
        width: 400px;
        display: flex;
    }

    input {
        width: 400px;
        height: 30px;
        font-size: 1.2em;
        border-radius: 10px;
        border: solid 2px #2c3e50;
        padding-left: 10px;
        font-family: 'Nunito', sans-serif;
        outline: none;
        &:focus{
            border-color: #FD2D01;
        }
    }
</style>