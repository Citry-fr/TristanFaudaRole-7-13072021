import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
      email: "", 
      password: "",
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
    }
  },
  mutations: {
    MODIFY_DATA(state, {element, value}){
      state.formData[element] = value;
      state.isValid[element] = state.regData[element].test(value);
    },
    MODIFY_LOGIN_DATA(state, {element, value}){
      state.loginData[element] = value;
      console.log(state.loginData);
    },
    MODIFY_GIF_DATA(state, {element, value}){
      state.gifData[element] = value;
      console.log(state.gifData);
    },
    MODIFY_GIF_FILE(state){
      state.gifData.gif = document.getElementById('gif').files[0];
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
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${user.token}`);

      // var raw = JSON.stringify({
      //   name: this.state.gifData.name,
      //   userId: user.userId,
      // });

      const formData = new FormData();

      formData.append("gif", this.state.gifData.gif);
      formData.append("name", this.state.gifData.name);
      formData.append("userId", user.userId);


      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/api/gif/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },
  },
  modules: {
  }
})
