<template>
<div>
    <h2>Links count</h2>
    <p>{{ countLinks }}</p>
    <button @click="removeAllLinks" class="btn btn-primary">Remove All</button>
    <p>{{ msg }}</p>
</div>

</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
name : 'Stats',
data() {
    return {
      msg: ''
    }
  
},
computed: {
    ...mapGetters([
        'countLinks'
    ]),
},

methods :{
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions(['removeAll']),
    removeAllLinks: function(){
        this.removeAll().then(() => {
         this.msg = 'all links removed'
        })
       
    }
}

}
</script>

<style>

</style>
