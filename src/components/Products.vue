<template>
    <div>
        {{countProducts}}
        <p v-for="product in availableProducts" :key="product.id" class="card">
            <!-- <span v-if="product.status === 'available'"> -->
            <span>{{product.name}} - {{product.price}} | {{product.inventory}}</span> |
            <button @click="addToCart(product)">Add To Cart</button>
            <!-- </span> -->
        </p>

    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";
export default {
    name: 'Products',
    data(){
        return{
           product:''
        }
    },
computed:{
     
    ...mapGetters('products',[
        "availableProducts",
        "countProducts"
    ]),
    // availableProducts: () => {
    //     // return this.allProducts.filter(products => {
    //     //     return products.status.available
    //     // })
    // },
},
mounted(){
     this.$store.dispatch('products/getAllProducts');
},
methods:{
    ...mapMutations('cart',[
        'ADD_TO_CART'
    ]),
    ...mapActions('cart',['addToCart']),
   
        // addItemToCart(product){
        //     console.log(product)
        //    this.addToCart(product);
        // },
        //  allProducts: () => {
        //     //console.log(this.products)// = this.allProducts;
        //  }

}
}
</script>

<style>

</style>
