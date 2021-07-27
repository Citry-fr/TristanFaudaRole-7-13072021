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
        email: false, 
        password: false,
        firstname: false,
        lastname: false
    }
  },
  mutations: {
    MODIFY_DATA(state, {element, value}){
      state.formData[element] = value;
      console.log(state.formData);
    }
  },
  actions: {
  },
  modules: {
  }
})
