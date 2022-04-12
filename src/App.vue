<template>
  <div id="app">
    <div id="nav">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
 name: "App",
 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 0px;

  a {
    font-weight: normal;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
