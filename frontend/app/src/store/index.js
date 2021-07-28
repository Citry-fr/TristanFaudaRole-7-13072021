import Vue from 'vue'
import Vuex from 'vuex'

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
  },
  mutations: {
    MODIFY_DATA(state, {element, value}){
      state.formData[element] = value;
      state.isValid[element] = state.regData[element].test(value);
    },
  },
  actions: {
    postData() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        ...this.state.formData,
        "rank": 0
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      console.log(raw);
      fetch("http://localhost:3000/api/auth/signup", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  },
  modules: {
  }
})
