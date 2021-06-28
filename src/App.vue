<template>
<div id="app">
  <Header/>
  <router-view/>
  <Footer/>
</div>
</template>

<script>
  import Header from './components/common/Header.vue';
  import Footer from './components/common/Footer.vue';

  export default {
    components: {
      Header,
      Footer
    },
  }
</script>

<style src='./assets/styles/jqwidgets/jqx.base.css'></style>
<style src='./assets/styles/jqwidgets/jqx.material-green.css'></style>