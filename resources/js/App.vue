<template>
<h1>Welcome to Laravel8 with Vue 3 App</h1>

<!-- vuex  -->
<h1>{{ $store.state.test }}</h1>

<!-- router  -->
<router-link class="btn btn-primary m-1" to="/">Home</router-link> &nbsp;&nbsp;&nbsp;
<router-link class="btn btn-primary m-1" to="/about">About</router-link>
<router-link class="btn btn-primary m-1" to="/auth/login">Login</router-link>

<!-- dynamic route pages  -->
<router-view></router-view>
</template>


<script>
export default {
  mounted(){

  },
//    watch: {
//       '$route' (to, from) {
//         document.title = to.meta.title || 'Home'
//       }
//     },
}
</script>

