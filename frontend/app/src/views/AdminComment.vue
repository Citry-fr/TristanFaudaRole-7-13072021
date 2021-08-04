<template>
  <div>
      <AdminRouter />
      <p v-if="pendingComs.length === 0 ">Aucun commentaire à valider</p>
      <div class="comCards">
          <AdminComCard            
            v-for="com in pendingComs"
            v-bind:key="com.id"
            :firstname="com.user.firstname"
            :lastname="com.user.lastname"
            :com="com.text"
            v-on:accept="acceptCom(com.id)"
            v-on:delete="deleteCom(com.id)"
        />
      </div>
  </div>
</template>

<script>

// Views qui affiche tout les commentaire du site qui sont en attentes de validation

import AdminRouter from '../components/AdminRouter.vue';
import AdminComCard from '../components/AdminComCard.vue';
import { mapActions, mapState } from 'vuex';

const myHeaders = new Headers();
const user = 0;

if(localStorage.getItem('User') !== null){
    const user = JSON.parse(localStorage.getItem('User'));    
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    myHeaders.append("Content-Type", "application/json");
}


export default {
    name: 'AdminComment',
    components: {
        AdminRouter,
        AdminComCard
    },
    methods: {
        ...mapActions(['getPendingComs']),
        acceptCom(comId) {


            const raw = JSON.stringify({
            status: 1
            });

            const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch(`http://localhost:3000/api/com/admin/comment/${comId}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                window.location.reload();
            })
            .catch(error => console.log('error', error));
        },
        deleteCom(comId) {
            var raw = JSON.stringify({
                userId: user.userId
            });

            var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch(`http://localhost:3000/api/com/${comId}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                    window.location.reload();
                })
                .catch(error => console.log('error', error));
        },
    },
    computed: {
        ...mapState(['pendingComs'])
    },
    beforeMount() {
        this.getPendingComs();
    }

}
</script>

<style scoped lang="scss">
    .comCards{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin: 30px;
    }
</style>