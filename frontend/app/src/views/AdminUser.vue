<template>
  <div>
      <AdminRouter />
      <p v-if="allUsers.length === 0 ">Aucun utilisateur à afficher</p>
      <div class="userCards">
          <AdminUserCard
            v-for="user in allUsers"
            v-bind:key="user.id"
            :firstname="user.firstname"
            :lastname="user.lastname"
            :isDisable="user.isDisabled"
            v-on:disable="statusUser(user.id, true)"
            v-on:enable="statusUser(user.id, false)"
            v-on:delete="deleteUser(user.id)"
           />
      </div>
  </div>
</template>

<script>

// View qui affiche tout les utilisateur présent dans la BDD et permet au admin des les gérer

import AdminRouter from '../components/AdminRouter.vue';
import AdminUserCard from '../components/AdminUserCard.vue';

import { mapActions, mapState } from 'vuex';

const myHeaders = new Headers();
let user = 0;

if(localStorage.getItem('User') !== null){
    user = JSON.parse(localStorage.getItem('User'));    
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    myHeaders.append("Content-Type", "application/json");
}

export default {
    name: 'AdminUser',
    components: {
        AdminRouter,
        AdminUserCard
    },
    methods: {
        ...mapActions(['getAllUsers']),
        statusUser(userId, bool) {
            var raw = JSON.stringify({
                isDisabled: bool
            });

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`http://localhost:3000/api/auth/admin/users/${userId}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    window.location.reload();
                })
                .catch(error => console.log('error', error));
        },
        deleteUser(userId){
            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`http://localhost:3000/api/auth/admin/users/${userId}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    window.location.reload();
                })
                .catch(error => console.log('error', error));
        }
    },
    computed: {
        ...mapState(['allUsers'])
    },
    beforeMount() {
        this.getAllUsers();
    }


}
</script>

<style scoped lang="scss">
    .userCards{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin: 30px;
    }
</style>