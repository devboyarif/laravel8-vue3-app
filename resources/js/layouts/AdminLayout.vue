<template>
    <div>
    <Header/>
    <navbar/>
      <div class="page-wrapper">
        <div class="page-body">
          <div class="container-xl">
               <router-view />
          </div>
        </div>
       <Footer/>
      </div>
    </div>
</template>

<script>
import Footer from '../components/layouts/Footer'
import Header from "../components/layouts/Header"
import Navbar from '../components/layouts/Navbar'

export default{
    components: {
        Header,
        Navbar,
        Footer
    },
}
</script>

<style lang="scss">
    @import url('../assets/css/tabler.min.css');
    @import url('../assets/css/tabler-flags.min.css');
    @import url('../assets/css/tabler-payments.min.css');
    @import url('../assets/css/tabler-vendors.min.css');
    @import url('../assets/css/demo.min.css');
</style>

