<template>
  <div id="app">
    <Header/>
    <router-view class='main'></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer    
  }
}
</script>

<style lang="scss" scoped>
  #app{
    display:flex;
    flex-direction:column;
    .main{
      flex:1
    }
  }
</style>

