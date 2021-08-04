<template>
  <div class="card">
      <p class="card__name">{{`${firstname} ${lastname}`}}</p>
      <div class="card__button">
        <button class="card__button__enable" @click="enableEvent" v-if="isDisable">Activer</button>
        <button class="card__button__disable" @click="disableEvent" v-if="!isDisable">Désactiver</button>
        <button class="card__button__delete" @click="deleteEvent" :disabled="!isDisable">Supprimer</button>
      </div>
  </div>
</template>

<script>

// Composant pour afficher tout les utilisateur du site dans la partie Admin

export default {
  name: 'AdminUserCard',
  props: {
    firstname: String,
    lastname: String,
    isDisable: Boolean
  },
  methods: {
    disableEvent() {
      this.$emit('disable');
    },
    enableEvent() {
      this.$emit('enable');
    },
    deleteEvent() {
      this.$emit('delete');
    }
  },
}
</script>

<style scoped lang="scss">
  .card{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    padding-bottom: 20px;
    border: 2px solid #2c3e50;
    border-radius: 10px;
    &__name{
      text-decoration: underline;
      text-decoration-color: #FD2D01;
    }
    &__com{
      margin-top: 0;
    }
    &__button{
      display: flex;
      justify-content: center;
      gap: 20px;
      &__disable, &__delete, &__enable{
        padding: 5px 10px;
        background-color: white;
        border-radius: 10px;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        cursor: pointer;
        width: 87px;   
      }
      &__disable, &__delete{
        border: 2px solid red;
        color: red;
        &:hover{
          background-color: lightcoral;
        }
        &:disabled{
            border-style: dashed;
            background-color: white;
            cursor: initial;
        } 
      }
      &__enable{
        border: 2px solid green;
        color: green;
        &:hover{
          background: lightgreen;
        }
      }
    }
  }
</style>