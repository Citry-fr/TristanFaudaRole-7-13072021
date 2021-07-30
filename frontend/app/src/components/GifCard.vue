<template>
  <div class="card">
      <img src="../assets/test.gif" alt="gif" class="card__gif">
      <div class="card__infos">
          <h2 class="card__infos__title">gif title</h2>
          <div class="card__infos__side">
              <p class="card__infos__side__author">gif author</p>
              <p class="card__infos__side__coms">com n°</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'GifCard'

}
</script>

<style lang="scss" scoped>
    .card{
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 15px;
        border: 2px solid #2c3e50;
        &__infos {
            display: flex;
            justify-content: space-between;
            &__title{
                align-self: center;
                padding-left: 10px;
            }
            &__side{
                padding-right: 10px;
            }
        }
        &__gif {
            width: 100%;
            height: 100%;
            border-radius: 12px 12px 0 0;
            object-fit: cover;
            margin-top: -1px;
        }
    }
</style>