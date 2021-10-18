import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    allProducts: [],
    cart: [],
    filterValue: 1
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.allProducts.find(el => el.id == id);
    },
    checkIfInCart: (state) => (id) => {
      const prod = state.allProducts.find(el => el.id == id);
      return prod.inCart;
    }
  },
  mutations: {
    setAllProducts: (state, products) => {
      state.allProducts = products;
      state.allProducts.forEach(el => {
        el.inCart = false;
      })
    },
    addToCart: (state, id) => {
      let prod = undefined;
      state.allProducts.forEach(el => {
        if(el.id == id){
          el.inCart = true;
          prod = {
            ...el
          }
        }
      });
      state.cart.push(prod);      
    },
    removeFromCart: (state, id) => {
      state.allProducts.forEach(el => {
        if(el.id == id){
          el.inCart = false;
        }
      });
      const index = state.cart.find(el => el.id == id);
      state.cart.splice(index, 1);
    },
    setFilterValue: (state, value) => {
      state.filterValue = value;
    },
    handleCheckout: (state) => {
      state.allProducts.forEach(el => el.inCart = false);
      state.cart = [];
    }
  },
  actions: {
    async fetchAllProducts({ commit }){
      const res = await axios.get('https://fakestoreapi.com/products/');
      commit('setAllProducts', res.data);
    },
    async fetchSingleProduct({ commit }, id){
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data; 
    },
    addToCart({ commit }, id){
      commit('addToCart', id);
    },
    removeFromCart({ commit }, id){
      commit('removeFromCart', id);
    },
    setFilterValue({ commit }, value){
      commit('setFilterValue', value);
    },
    handleCheckout({ commit }){
      commit('handleCheckout');
    }
  },
  modules: {
  }
})
