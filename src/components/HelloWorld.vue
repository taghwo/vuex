<template>
  <section>
    
    <h1 class="justify-center" style="margin-top:3%">No amount of money ever bought a second of time</h1>
    <h2 class="mt-3">{{ title }}</h2>
    <!-- <div class="left">
    <ul>
      <li v-for="(link, index) in links" :key="index">
          {{link}}
          <button @click="removeLinks(index)">Delete</button>
      </li>
      
    </ul>

    <form @submit.prevent="addLink" >
      <input type="text" class="form-control" v-model="newlink">
      <button class="btn btn-sm btn-primary" type="submit">Add link</button>
    </form>
    </div>
    <div class="right">
      <stats />
    </div> -->

    <div>
      <products />
    </div>

  </section>
</template>
<script>
//import Stats from "@/components/Stats";
import Products from "@/components/Products";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
   // Stats,
    Products,
  },
  data() {
    return {
    newlink: ''
  }
  },
  computed: {
    ...mapState([
    "title",
    "links"
  ])
  },

  methods : {
    ...mapMutations([
      'ADD_LINK'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    addLink: function() {
     
      this.ADD_LINK(this.newlink);
      this.newlink = ''
    },
    removeLinks(link){
      this.removeLink(link)
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
