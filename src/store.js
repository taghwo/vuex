import Vue from 'vue';
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
    import Vuex from 'vuex';
    Vue.use(Vuex);
    import products from '@/modules/products';
    import cart from '@/modules/cart';
    const debug = process.env.NODE_ENV !== 'production';

    export default new Vuex.Store({
        // state:{
        //     // title: 'my title',
        //     // links: [
        //     //     'Niarashop.ng',
        //     //     'iproject.ng',
        //     //     'instantposer.ng'
        //     // ],
        //     // products:[
        //     //   {'id' : 1,'name': 'shoe','instock':true,'price':250,'inventory':10},
        //     //   {'id' : 2,'name': 'bag','instock':false,'price':300,'inventory':5},
        //     //   {'id' : 3,'name': 'gown','instock':true,'price':400,'inventory':10},
        //     // ],

        //     cart:[]

        // },
        // getters :{
        //   availableProducts: state => {
        //     return state.products.filter( products => products.instock == true)
        //   },
        //     countLinks: state => {
        //         return state.links.length;
        //     },
        //     countProducts: state => {
        //       return state.products.length;
        //     },
        //     getCartItems: (state,getters,rootState) => {

        //       return state.cart.map(({id,quantity}) => {
        //         let product = rootState.products.find(product => product.id === id);
        //        return {
        //          name:product.name,
        //          price:product.price,
        //          quantity
        //        }
        //       })
               
        //     },

        //     cartTotalPrice: (state,getters) =>{
        //         return getters.getCartItems.reduce((total,product) => {
        //           return total + product.price * product.quantity
        //         },0) 
        //     },
        //     cartItemCount(state){
        //       return state.cart.length;
        //     }
        // },
        // mutations:{

        //   ADD_TO_CART: (state, cart) => {
        //     state.cart.push(cart)
        //   },
        //   INCREMENT_CART_ITEM_QUANTITY: (state,cart) =>{
        //      let cartItem = state.cart.find(product =>product.id === cart.id);
        //      return cartItem.quantity++
        //   },
        //   DECREMENT_PRODUCT_Quantity(state,{id}){
        //     let product = state.products.find(product => product.id === id);
        //     product.inventory--;
        //   },
        //   ADD_LINK :(state , link) => {
        //     state.links.push(link)
          
        //   },
        //   REMOVE_LINK: (state,link) => {
        //     state.links.splice(link, 1)
        //   },
        //   REMOVE_ALL: (state) => {
        //     state.links = []
        //   },
        //   CLEAR_ALL: (state) => {
        //     state.cart = []
        //   },

        // },
        // actions: {
        //   clearCart: ({commit}) => {
        //     return new Promise((resolve,reject) => {
        //       setTimeout(() => {
        //         commit("CLEAR_ALL")
        //         resolve()
        //       }, 100);
        //     })
        //   },
         

        //   addToCart: ({commit,state},product) => {
        //     if(product.inventory > 0){
        //       const cartItem = state.cart.find(item => item.id === product.id);
        //       if(!cartItem){
        //         commit("ADD_TO_CART",{'id': product.id,'quantity':1})
        //       }
        //       else{
        //         commit('INCREMENT_CART_ITEM_QUANTITY',cartItem)
        //       }
        //       commit('DECREMENT_PRODUCT_Quantity',{id:product.id})
              
        //     }
           
        //   },
        //   removeLink: (context,link) => {
        //     context.commit("REMOVE_LINK", link)
        //   },
        //   removeAll: ({commit}) => {
        //     return new Promise((resolve,reject) => {
        //       setTimeout(() => {
        //         commit("REMOVE_ALL")
        //         resolve()
        //       }, 1500);
        //     });
           
        //   }
        // },
        modules :{
          cart,
          products
        },
        plugins: [vuexLocal.plugin]
    });
