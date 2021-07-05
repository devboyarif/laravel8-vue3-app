<template>
  <li class="nav-item">
        <router-link :to="{name: routeName}"  class="nav-link" >
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <svg-icons :type="svgType"/>
            </span>
            <span class="nav-link-title">
                <slot />
            </span>
        </router-link>
    </li>
</template>

<script>
import SvgIcons from '../SvgIcons.vue'

export default {
    props:['routeName','svgType'],
    components: {
           SvgIcons
    },
}
</script>

<style>

</style>
