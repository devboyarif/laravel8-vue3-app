<template>
    <li class="nav-item dropdown" :class=" sidebarDropdown ? 'active' : ''">
        <a @click.prevent="sidebarDropdown = !sidebarDropdown" :class="{'show': sidebarDropdown}" class="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown"
            role="button" aria-expanded="false">
            <span class="nav-link-icon d-md-none d-lg-inline-block">
                <slot name="icon" />
            </span>
            <span class="nav-link-title">
                {{ title }}
            </span>
        </a>
        <div :class="{'show': sidebarDropdown}" class="dropdown-menu">
            <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                    <slot />
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            sidebarDropdown: false,
        }
    }
}
</script>

<style lang='scss' scoped>
.nav-item.dropdown .nav-link::after {
    transition: all .3s linear;
}

.nav-item.dropdown.active {
    .nav-link::after {
        transform: rotate(135deg);
    }
}
</style>
