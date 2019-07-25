<template>
    <div>
       <p> {{msg}}</p>
        <p v-for="product in getCartItems" :key="product.id">
            {{product.name}} - {{product.price}} x {{product.quantity}} 
        </p>
       
             <p v-show="cartTotalPrice < 1"> {{info}} <router-link to="/">Start Shopping</router-link></p>
        <div v-if="getCartItems.length > 0">
           
         <p>Total Price {{cartTotalPrice}}</p>
        <button @click="clearAllItems" class="btn btn-primary">Clear Cart</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions, mapMutations} from "vuex";
export default {
name: 'Cart',
data(){
return {
    msg:'',
    info:'Your cart is empty'
}
},
computed:{    
...mapGetters('cart',[
   "getCartItems",
    "cartTotalPrice"
]),

},

methods:{
    ...mapActions('cart',['clearCart']),
   
        clearAllItems :function(){
        this.clearCart().then(() => {
            this.$store.dispatch('products/refreshState');
        this.msg = 'all products removed from cart'
        })
},
    // checkCartItems: function(){
    //     if(this.getCartItems.length > 0)
    //     return this.info = ''
    // },
}
}
</script>

<style>

</style>
