<template>
  <div class="headercontainer">
    <div class="logo">
      <img alt="logo" class="logo" src="@/assets/logo.png" />
    </div>
    <ul class="nav-logos">
      <li><img alt="twitter" src="@/assets/twitter.png" /></li>
      <li><img alt="dribble" src="@/assets/dribbble.png" /></li>
      <li><img alt="figma" src="@/assets/figma.png" /></li>
      <li><img alt="github" src="@/assets/github.png" /></li>
    </ul>
  </div>
</template>



<script>
export default {
  name: 'HeaderComponent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headercontainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logos{
  display: flex;
    flex-direction: row;
}
li {
  list-style: none;
  padding: 10px;
  
}
</style>
