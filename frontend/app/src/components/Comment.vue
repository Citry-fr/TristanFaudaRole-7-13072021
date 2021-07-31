<template>
  <div class="comCard">
      <p class="comCard__user">{{`${firstname} ${lastname}`}} :</p>
      <p class="comCard__com"><span class="comCard__com__dash">-</span> {{ text }}</p>
  </div>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        firstname: String,
        lastname: String,
        text: String
    }
}
</script>

<style scoped lang='scss'>
    .comCard {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        width: 650px;
        margin: auto;
        background: #d6d6d6;
        border-radius: 20px;
        border: 2px solid #2c3e50;
        &__user{
            margin-top: 0;
            font-weight: bolder;
            font-size: 1.2em;
            text-decoration-line: underline;
            text-decoration-color: #FD2D01;
        }
        &__com{
            margin: 0;
            margin-left: 40px;
            &__dash{
                color: #FD2D01;
            }
        }
    }
</style>