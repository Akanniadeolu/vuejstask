<template>
  <div class="LandingPage">
    <div class="listitemcontainer" :key="item.id" v-for="item in items">
      <ListItem v-bind:item="item"/>
    </div>
    
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
    name: "ListContainer",
    props: ['items'],
    components: {
        ListItem
    },
  created()  {
    console.log("Created ToDoList", this.items);
  }

}
</script>




<style>
.LandingPage{
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 100px;
   
}



</style>