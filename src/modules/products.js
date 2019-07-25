import shop from '../shop'

   const state = {
            
            title: 'my title',
            all:[ ],

        }
    const getters = {
            availableProducts: state => {
              return state.all.filter( products => products.instock == true)
            },
              countLinks: state => {
                  return state.links.length;
              },
              countProducts: state => {
                return state.all.length;
              }
            //   getCartItems: (state,getters,rootState) => {
  
            //     return state.cart.map(({id,quantity}) => {
            //       let product = rootState.products.find(product => product.id === id);
            //      return {
            //        name:product.name,
            //        price:product.price,
            //        quantity
            //      }
            //     })
                 
            //   },
  
            //   cartTotalPrice: (state,getters) =>{
            //       return getters.getCartItems.reduce((total,product) => {
            //         return total + product.price * product.quantity
            //       },0) 
            //   },
            //   cartItemCount(state){
            //     return state.cart.length;
            //   }
          }
          const mutations = {
             SET_PRODUCTS(state) {
              state.all = shop.getProducts();
             },
             REFRESH_PRODUCTS(getters){
             getters.availableProducts = shop.getProducts();
             },
            // ADD_TO_CART: (state, cart) => {
            //   state.cart.push(cart)
            // },
            // INCREMENT_CART_ITEM_QUANTITY: (state,cart) =>{
            //    let cartItem = state.cart.find(product =>product.id === cart.id);
            //    return cartItem.quantity++
            // },
            DECREMENT_PRODUCT_Quantity(state,{id}){
              let product = state.all.find(product => product.id === id);
              product.inventory--;
            },
            // ADD_LINK :(state , link) => {
            //   state.links.push(link)
            
            // },
            // REMOVE_LINK: (state,link) => {
            //   state.links.splice(link, 1)
            // },
            // REMOVE_ALL: (state) => {
            //   state.links = []
            // },
            // CLEAR_ALL: (state) => {
            //   state.cart = []
            // },
  
         }
          const actions = {

            getAllProducts: ({commit}) => {
             // if(shop.getProducts.length > 1){
              //shop.getProducts(products => {
                commit('SET_PRODUCTS')
              //})
              
             // }
            },
            refreshState({commit}){
              commit('REFRESH_PRODUCTS')
            }
        //     clearCart: ({commit}) => {
        //       return new Promise((resolve,reject) => {
        //         setTimeout(() => {
        //           commit("CLEAR_ALL")
        //           resolve()
        //         }, 100);
        //       })
        //     },
           
  
            // addToCart: ({commit,state},product) => {
            //   if(product.inventory > 0){
            //     const cartItem = state.cart.find(item => item.id === product.id);
            //     if(!cartItem){
            //       commit("ADD_TO_CART",{'id': product.id,'quantity':1})
            //     }
            //     else{
            //       commit('INCREMENT_CART_ITEM_QUANTITY',cartItem)
            //     }
            //     commit('DECREMENT_PRODUCT_Quantity',{id:product.id})
                
            //   }
             
            // },
            // removeLink: (context,link) => {
            //   context.commit("REMOVE_LINK", link)
            // },
            // removeAll: ({commit}) => {
            //   return new Promise((resolve,reject) => {
            //     setTimeout(() => {
            //       commit("REMOVE_ALL")
            //       resolve()
            //     }, 1500);
            //   });
             
            // }
          }
    
export default {namespaced:true,state,getters,mutations,actions}