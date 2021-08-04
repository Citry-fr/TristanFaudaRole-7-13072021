<template>
    <form class="form">
        <div class="form__email">
            <div class="label">
                <label class="form__email__label" for="email">Email :</label>
            </div>
            <input class="form__email__input" type="email" name="email" id="email" :value="loginData.email" @change="modifyLoginData">
            
        </div>
        <div class="form__password">
            <div class="label">
                <label class="form__password__label" for="password">Mot de passe :</label>
            </div>            
            <input class="form__password__input" type="password" name="password" id="password" :value="loginData.password" @change="modifyLoginData">            
        </div>
    </form>
</template>

<script>

/*
    Composant formulaire de connection qui contient deux champ input et qui modifie les données dans le store
*/

import { mapState } from 'vuex';

export default {
    name: 'LoginForm',
    methods: {
        modifyLoginData(e) {
            this.$store.commit('MODIFY_LOGIN_DATA', {
                element: e.target.name,
                value: e.target.value
            })
        }
    },
    computed: {
        ...mapState([ 'loginData' ]),
    }
}
</script>

<style lang="scss" scoped>
    .form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        &__email, &__password{
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
        height: 40px;
        display: flex;
        justify-content: baseline;
        line-height: 40px;
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

    .bouton{
        margin-top: 30px;        
    }

    .label {
        display: flex;
        width: 415px;
        height: 40px;
    }

    .error {
        width: 100%;
        height: 100%;
        color: #FD2D01;
        font-weight: bold;
    }
</style>