<template>
      <va-card>
        <va-image
          :src="product.image"
          style="height: 200px;"
          contain
        />
        <va-card-title>{{product.title.slice(0, 20)}}</va-card-title>
        <va-card-content class='card-price'>{{product.price}}$</va-card-content>
        <va-card-actions align="stretch" vertical>
          <va-button outline :to="{name: 'ProductPage', params: {id: product.id}}">View Details</va-button>
          <CartHandler :id="product.id"/>
        </va-card-actions>
      </va-card>
</template>

<script>
import CartHandler from './CartHandler.vue'
export default {
    name: 'SingleProduct',
    props: ['product'],
    components: {
      CartHandler
    },
}
</script>

<style>
.card-price {
    text-align: left;
}

</style>