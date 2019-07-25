<template>
    <div>
        <p>{{cartItemCount}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name:'CartCounter',
computed :{...mapGetters('cart',['cartItemCount'])}
}
</script>

<style>

</style>
