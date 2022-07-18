<template>
  <div class="top">
    <div class="logo">
      <img alt="logo" class="logo" src="@/assets/logo.png" />
    </div>
    <div class="nav-logos">
      <img alt="twitter" src="@/assets/twitter.png" />
      <img alt="vector" src="@/assets/Vector.png" />
      <img alt="github" src="@/assets/github.png" />
    </div>
  </div>
</template>



<script>
export default {
  name: 'HeaderComponent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logos{
  margin: 0 10px;
}

</style>
