<template>
    <form class="form">
        <div class="form__email">
            <div class="label">
                <label class="form__email__label" for="email">Email :</label>
                <p class="error" v-show="!isValid.email">Email incorrect</p>
            </div>
            <input class="form__email__input" type="email" name="email" id="email" v-model="formData.email" @input="checkData(formData.email, regData.email, 'email')">
            
        </div>
        <div class="form__password">
            <div class="label">
                <label class="form__password__label" for="password">Mot de passe :</label>
                <p class="error" v-show="!isValid.password">Mot de passe incorrect</p>
            </div>
            
            <input class="form__password__input" type="password" name="password" id="password" v-model="formData.password" @input="checkData(formData.password, regData.password, 'password')">
            
        </div>
        <div class="form__firstname">

            <div class="label">
                <label class="form__firstname__label" for="firstname">Prénom :</label>
                <p class="error" v-show="!isValid.firstname">Prénom incorrect</p>
            </div>
            <input class="form__firstname__input" type="text" name="firstname" id="firstname" v-model="formData.firstname" @input="checkData(formData.firstname, regData.firstname, 'firstname')">
            
        </div>
        <div class="form__lastname">
            <div class="label">
                <label class="form__lastname__label" for="lastname">Nom :</label>
                <p class="error" v-show="!isValid.lastname">Nom incorrect</p>
            </div>
            <input class="form__lastname__input" type="text" name="lastname" id="lastname" v-model="formData.lastname" @input="checkData(formData.lastname, regData.lastname, 'lastname')">            
        </div>
    </form>
</template>

<script>

export default {
    name: 'SignupForm',
    data() {
        return {
            formData: {
                email: "", 
                password: "",
                firstname: "",
                lastname: ""
            },
            regData: {
                email: /^[\w-.]+@([\w-]+[.])+[\w-]{2,4}$/,
                password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                firstname: /^[A-Za-zÀ-ü-']+$/,
                lastname: /^[A-Za-zÀ-ü-']+$/
            },
            isValid: {
                email: false, 
                password: false,
                firstname: false,
                lastname: false
            }
        };
    },
    methods: {
        getData() {
            return {
                ...this.formData
            };
        },
        checkData(element, reg, input) {
            const valid = reg.test(element);
            console.log(valid);
            this.isValid[input] = valid;
            console.log(this.isValid[input]);
        }, 
        getValid() {
            const values = Object.values(this.isValid);
            return !values.some(v => v !== true);
        }    
    },
    computed: {
        
    }
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