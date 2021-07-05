<template>
    <div class="navbar-expand-md">
        <div class="collapse navbar-collapse" id="navbar-menu">
          <div class="navbar navbar-light">
            <div class="container-xl">
              <ul class="navbar-nav">
                    <navigation-link routeName="home" svgType="home">Home</navigation-link >
                    <navigation-link routeName="about" svgType="about">About</navigation-link >
                    <dropdown title="Dropdown">
                        <template v-slot:icon>
                           <svg-icons type="cube"/>
                        </template>
                        <router-link :to="{ name: 'home' }" class="dropdown-item">
                            Home
                        </router-link>
                        <router-link :to="{ name: 'about' }" class="dropdown-item">
                            About
                        </router-link>
                    </dropdown>
              </ul>
              <div class="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                <form action="." method="get">
                  <div class="input-icon">
                    <span class="input-icon-addon">
                    <svg-icons type="search"/>
                    </span>
                    <input type="text" class="form-control" placeholder="Search…" aria-label="Search in website">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import NavigationLink from '../Navigation/NavigationLink.vue'
import Dropdown from '../Navigation/Dropdown.vue';
import SvgIcons from '../SvgIcons.vue'

export default {
    components: {
        NavigationLink,
        Dropdown,
        SvgIcons
    },
}
</script>
