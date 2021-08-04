<template> 
  <div class="card">
      <p class="card__name">{{`${firstname} ${lastname}`}}</p>
      <p class="card__com">{{com}}</p>
      <div class="card__button">
        <button class="card__button__accept" @click="acceptEvent">Accepter</button>
        <button class="card__button__delete" @click="deleteEvent">Supprimer</button>
      </div>
  </div>
</template>

<script>

// Composant pour afficher afficher les commentaire et permettre au Admin de les valider ou supprimer

export default {
  name: 'AdminComCard',
  props: {
    firstname: String,
    lastname: String,
    com: String
  },
  methods: {
    acceptEvent() {
      this.$emit('accept');
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
      &__accept, &__delete{
        padding: 5px 10px;
        background-color: white;
        border-radius: 10px;
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        cursor: pointer;
        width: 87px;
      }
      &__accept{
        border: 2px solid green;
        color: green;
        &:hover{
          background: lightgreen;
        }
      }
      &__delete{
        border: 2px solid red;
        color: red;
        &:hover{
          background-color: lightcoral;
        }
      }
    }
  }
</style>