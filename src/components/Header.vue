<template>
  <div class="header">
      <va-affix :offset-top="0">
        <va-navbar color="dark" shape class="mb-2">
            <template #left>
                <va-navbar-item @click="router.push('/')" class="navbar-clickable">Shop</va-navbar-item>
                <va-navbar-item @click="router.push('/about')" class="navbar-clickable">About Us</va-navbar-item>
            </template>
            <template #center>
                <va-navbar-item @click="router.push('/')" class='navbar-clickable'> OpenShop</va-navbar-item>
            </template>
            <template #right>
                <va-navbar-item> 
                    <va-button outline color="#FFF">Login</va-button>
                </va-navbar-item>
                <va-navbar-item class="navbar-clickable" @click="router.push('/checkout')">
                    <span class="material-icons cart-icon">shopping_cart</span>
                    <va-badge :text="cart.length" color="success" />
                </va-navbar-item>
            </template>
        </va-navbar>
      </va-affix>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: 'Header',
    setup(){
        const store = useStore();
        const router = useRouter();
        const cart = computed(() => store.state.cart);

        return {
            cart,
            router
        }
    }
    
}
</script>

<style>
.cart-icon{
    padding-top: 6px;
}
.navbar-clickable{
    cursor: pointer;
}

</style>