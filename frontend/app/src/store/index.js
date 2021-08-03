import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {
      email: "", 
      password: "",
      confPassword: "",
      firstname: "",
      lastname: ""
    },
    regData: {
      email: /^[\w-.]+@([\w-]+[.])+[\w-]{2,4}$/,
      password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      confPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      firstname: /^[A-Za-zÀ-ü-']+$/,
      lastname: /^[A-Za-zÀ-ü-']+$/
    },
    isValid: {
      email: "", 
      password: "",
      confPassword: "",
      firstname: "",
      lastname: ""
    },
    loginData: {
      email: "",
      password: ""
    },
    gifData: {
      name: "",
      gif: ""
    },
    allGifs: {

    },
    oneGif: {

    },
    comData: {
      text: ""
    },
    oneCom: {

    },
    gifDataModif: {
      name: "",
      gif: ""
    },
    pendingComs: {

    }
  },
  mutations: {
    MODIFY_DATA(state, {element, value}){
      state.formData[element] = value;
      state.isValid[element] = state.regData[element].test(value);
      state.isValid.confPassword = state.formData.password === state.formData.confPassword;
    },
    MODIFY_LOGIN_DATA(state, {element, value}){
      state.loginData[element] = value;
    },
    MODIFY_GIF_DATA(state, {element, value}){
      state.gifData[element] = value;
      console.log(state.gifData[element]);
    },
    MODIFY_GIF_FILE(state){
      state.gifData.gif = document.getElementById('gif').files[0];
      console.log(state.gifData.gif);
    },
    MODIFY_COM_DATA(state){
      state.comData.text = document.getElementById('comment').value;
    },
    MODIF_GIF_NAME(state, {value}){
      state.gifDataModif.name = value;
    },
    MODIF_GIF_FILE(state){
      state.gifDataModif.gif = document.getElementById('gif').files[0];
    }
  },
  actions: {
    postData() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        ...this.state.formData,
        "rank": 0
      });

      const login = JSON.stringify({
        email: this.state.formData.email,
        password: this.state.formData.password
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const loginOptions = {
        method: 'POST',
        headers: myHeaders,
        body: login,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/api/auth/signup", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          fetch("http://localhost:3000/api/auth/login", loginOptions)
            .then(response => response.text())
            .then(result => {
              console.log(result);
              localStorage.setItem('User', result);
              router.push({name: 'AllGifs'})
              location.reload();
            })
            .catch(error => console.log('error', error));
            })
        .catch(error => console.log('error', error));
        
    },

    postLogin() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        ...this.state.loginData
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/api/auth/login", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          localStorage.setItem('User', result);
          router.push({name: 'AllGifs'})
          location.reload();
        })
        .catch(error => console.log('error', error));
    },

    postGif() {
      const user = JSON.parse(localStorage.getItem('User'))
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);

      const formData = new FormData();

      formData.append("gif", this.state.gifData.gif);
      formData.append("name", this.state.gifData.name);
      formData.append("userId", user.userId);


      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/api/gif/", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          router.push({name: 'AllGifs'});
          this.state.gifData = {
            name: "",
            gif: ""
          };
        })
        .catch(error => console.log('error', error));
    },

    getAllGifs() {
      if(localStorage.getItem('User') !== null){
      const user = JSON.parse(localStorage.getItem('User'))
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/api/gif/", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          this.state.allGifs = JSON.parse(result);
          console.log(this.state.allGifs);
        })
        .catch(error => console.log('error', error));
      }
    },

    getOneGif(){
      const user = JSON.parse(localStorage.getItem('User'))
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const url = window.location.href;
      const gifId = url.split('gif/')[1];
      console.log(gifId);

      fetch(`http://localhost:3000/api/gif/${gifId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            this.state.oneGif = JSON.parse(result);
            console.log(this.state.oneGif);
          })
        .catch(error => console.log('error', error));
    },

    postCom(){
      const user = JSON.parse(localStorage.getItem('User'))
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        text: this.state.comData.text,
        userId: user.userId,
        status: 0
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const gifId = this.state.oneGif.id
      fetch(`http://localhost:3000/api/com/${gifId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          window.location.reload();
        })
        .catch(error => console.log('error', error));
    },

    deleteGif() {
      const user = JSON.parse(localStorage.getItem('User'))
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify({
          userId: user.userId,
        }),
        redirect: 'follow'
      };
      const gifId = this.state.oneGif.id
      fetch(`http://localhost:3000/api/gif/${gifId}/`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          router.push({name: 'AllGifs'});
        })
        .catch(error => console.log('error', error));
    },    

    getOneCom(){
      const user = JSON.parse(localStorage.getItem('User'));
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const url = window.location.href;
      const comId = url.split('com/')[1];
      console.log(comId);
      fetch(`http://localhost:3000/api/com/${comId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            this.state.oneCom = JSON.parse(result);
            console.log(this.state.oneCom);
          })
        .catch(error => console.log('error', error));
    },

    modifyCom(){
      const user = JSON.parse(localStorage.getItem('User'));
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        text: this.state.comData.text,
        userId: user.userId,
        status: 0
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`http://localhost:3000/api/com/${this.state.oneCom.gifId}/${this.state.oneCom.id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          router.push({name: 'Gif', params: {id: this.state.oneCom.gifId}});
        })
        .catch(error => console.log('error', error));
    },

    modifyGif() {
      const user = JSON.parse(localStorage.getItem('User'))
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);

      const formData = new FormData();

      formData.append("gif", this.state.gifDataModif.gif);
      formData.append("name", this.state.gifDataModif.name);
      formData.append("userId", user.userId);


      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
      };

      fetch(`http://localhost:3000/api/gif/${this.state.oneGif.id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          router.push({name: 'AllGifs'});
          this.state.allGifs = "";
          this.state.oneGif = "";
        })
        .catch(error => console.log('error', error));
    },

    getPendingComs(){
      const user = JSON.parse(localStorage.getItem('User'))
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/api/com/admin/comment", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          this.state.pendingComs = JSON.parse(result);
        })
        .catch(error => console.log('error', error));
    },

    getAllUsers(){

      const user = JSON.parse(localStorage.getItem('User'))
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token} ${user.userId}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/api/auth/admin/users", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    
  },

    

  modules: {
  }
})
