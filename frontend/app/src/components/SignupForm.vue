<template>
    <form class="form">
        <div class="form__firstname">

            <div class="label">
                <label class="form__firstname__label" for="firstname">Prénom :</label>
                <p v-if="formData.firstname !== '' && !isValid.firstname" class="error" >Prénom incorrect</p>
            </div>
            <input class="form__firstname__input" type="text" name="firstname" id="firstname" :value="formData.firstname" @change="modifyData">
            
        </div>
        <div class="form__lastname">
            <div class="label">
                <label class="form__lastname__label" for="lastname">Nom :</label>
                <p v-if="formData.lastname !== '' && !isValid.lastname" class="error" >Nom incorrect</p>
            </div>
            <input class="form__lastname__input" type="text" name="lastname" id="lastname" :value="formData.lastname" @change="modifyData">            
        </div>
        <div class="form__email">
            <div class="label">
                <label class="form__email__label" for="email">Email :</label>
                <p v-if="formData.email !== '' && !isValid.email" class="error" >Email incorrect</p>
            </div>
            <input class="form__email__input" type="email" name="email" id="email" :value="formData.email" @change="modifyData">
            
        </div>
        <div class="form__password">
            <div class="label">
                <label class="form__password__label" for="password">Mot de passe :</label>
                <p v-if="formData.password !== '' && !isValid.password" class="error" >Mot de passe incorrect</p>
            </div>            
            <input class="form__password__input" type="password" name="password" id="password" :value="formData.password" @change="modifyData">
            
        </div>
        <div class="form__confPassword">
            <div class="label">
                <label class="form__confPassword__label" for="confPassword">Confirmation mot de passe :</label>
                <p v-if="formData.confPassword !== '' && !isValid.confPassword" class="form__confPassword__error" >Incorrect</p>
            </div>            
            <input class="form__confPassword__input" type="password" name="confPassword" id="confPassword" :value="formData.confPassword" @change="modifyData">
            
        </div>
        
    </form>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'SignupForm',
    data() {
        return {
            
        };
    },
    methods: {
        modifyData(e) {
            this.$store.commit('MODIFY_DATA', {
                element: e.target.name,
                value: e.target.value,
            });
        },
    },
    computed: {
        ...mapState(['formData', 'isValid']),
    }
}
</script>

<style lang="scss" scoped>
    .form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: auto;
        gap: 20px;
        &__email, &__password, &__firstname, &__lastname, &__confPassword{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        &__confPassword{
            &__label{
                font-size: 1.1em;
                width: 300px;
                
            }
            &__error{
                    width: 100px;                    
                    height: 100%;
                    color: #FD2D01;
                    font-weight: bold;
                }
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
        display: flex;
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
    @media (max-width: 425px){
        input{
            width: 300px;
        }
        label{
            justify-content: center;
            width: 200px;
        }
        .label{
            width: 200px;
            flex-direction: column;
            justify-content: center;
        }
        p{
            margin-top: 0;
        }
        .form__confPassword{
            justify-content: center;
            &__label{
                width: 225px;
            }
            &__error{
                width: 200px;
            }
        }
    }
</style>