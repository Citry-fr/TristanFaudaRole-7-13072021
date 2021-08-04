<template>
    <form class="form">
        <div class="form__name">
            <label class="form__name__label" for="name">Nom :</label>
            <input class="form__name__input" type="text" name="name" id="name" :value="gifDataModif.name" @change="modifyGifName">
            
        </div>
        <div class="form__gif">
            <label class="form__gif__label" for="password">Gif :</label>
            <input type="file" class="form__gif__input" name="gif" id="gif" accept="image/gif"  @change="modifyGifFile">       
        </div>
    </form>
</template>

<script>

/*
    Formulaire pour modifier un gif
*/

import { mapState } from 'vuex';

export default {
    name: 'ModifGifForm',
    methods: {
        modifyGifName(e) {
            this.$store.commit('MODIF_GIF_NAME', {
                value: e.target.value
            })
        },
        modifyGifFile(){
            this.$store.commit('MODIF_GIF_FILE');
        }
    },
    computed: {
        ...mapState([ 'oneGif', 'gifDataModif' ]),
    },
    beforeMount() {
        this.$store.commit('MODIF_GIF_NAME', {
                value: this.oneGif.name
        });
    }
}
</script>

<style lang="scss">
    .form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        &__name, &__gif{
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

    input, textarea {
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

    #gif{
        padding-top: 2px;
    }
</style>