
    
   const state = {
    namespace:true,
    title: 'my title',
    cart : []
    }
    const getters ={
    
      getCartItems: (state,getters,rootState) => {

        return state.cart.map(({id,quantity}) => {
          let product = rootState.products.all.find(product => product.id === id);
         return {
           name:product.name,
           price:product.price,
           quantity
         }
        })
         
      },

      cartTotalPrice: (state,getters) =>{
          return getters.getCartItems.reduce((total,product) => {
            return total + product.price * product.quantity
          },0) 
      },
      cartItemCount(state){
        return state.cart.length;
      }
  }

  const mutations ={

    ADD_TO_CART: (state, cart) => {
      state.cart.push(cart)
    },
    INCREMENT_CART_ITEM_QUANTITY: (state,cart) =>{
       let cartItem = state.cart.find(product =>product.id === cart.id);
       return cartItem.quantity++
    },
     CLEAR_ALL: (state) => {
              state.cart = []
    }
   
  }
  const actions = {
    clearCart: ({commit}) => {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          commit("CLEAR_ALL");
          resolve()
        }, 100);
      })
    },
   

    addToCart: ({commit,state},product) => {
      if(product.inventory > 0){
        const cartItem = state.cart.find(item => item.id === product.id);
        if(!cartItem){
          commit("ADD_TO_CART",{'id': product.id,'quantity':1})
        }
        else{
          commit('INCREMENT_CART_ITEM_QUANTITY',cartItem)
        }
        commit('products/DECREMENT_PRODUCT_Quantity',{id:product.id},{root:true})
        
      }
     
    },
    removeLink: (context,link) => {
      context.commit("REMOVE_LINK", link)
    },
    removeAll: ({commit}) => {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          commit("REMOVE_ALL")
          resolve()
        }, 1500);
      });
     
    }
  }

export default {namespaced:true,state,getters,mutations,actions}