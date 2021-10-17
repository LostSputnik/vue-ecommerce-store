<template>
    <va-button @click='addToCart' v-if="!inCart">Add to Cart</va-button>
    <va-button @click="removeFromCart" v-if="inCart">Remove From Cart</va-button>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    props: ['id'],
    setup({ id }){
        const store = useStore();
        const inCart =  computed(() => store.getters.checkIfInCart(id));
        const addToCart = (() => store.dispatch('addToCart', id));
        const removeFromCart = (() => store.dispatch('removeFromCart', id));

        return {
            inCart,
            addToCart,
            removeFromCart
        }
    }
}
</script>

<style>

</style>