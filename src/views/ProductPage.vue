<template>
<div class="details-page">
  <va-breadcrumbs separator=">" class="breadcrumb">
    <va-breadcrumbs-item label="Shop" to='/'/>
    <va-breadcrumbs-item :label="product.title" />
  </va-breadcrumbs>

  <div class="product-details">
    <div class="product-image">
      <va-image :src='product.image' contain/>
    </div>
    <div class="product-info">
      <h1>{{product.title}}</h1>
      <h2>Price: {{product.price}}</h2>
      <h2>  Rating:<va-rating v-model="product.rating.rate" /></h2>
      <div class="description">
        <h2>Description: </h2>
        <p>{{product.description}}</p>
      </div>
      <CartHandler :id="product.id"/>

    </div>
  </div>
</div>
</template>

<script>
import CartHandler from '@/components/CartHandler.vue'
import { useStore } from 'vuex'
export default {
    name: 'ProductPage',
    props: ['id'],
    components: {
      CartHandler
    },
    setup({ id }){
      const store = useStore();

      const product = store.getters.getProductById(id);

      return {
        product
      }
    }
}
</script>

<style scoped>
.details-page {
  margin-bottom: 80px;
}

.product-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 50px;
  margin: 20px auto;
}

.product-info{
  text-align: left;
  line-height: 1.5;
  
}
.breadcrumb{
  margin-top: 50px;
  margin-bottom: 70px;
}

.product-info h1 {
  font-size: 1.5rem;
  padding: 5px
}

.product-info h2 {
  font-size: 1.2rem;
  padding: 5px
}

.product-info p {
  font-size: 1.1rem;
  padding: 5px;
  margin-bottom: 20px;
}

.description{
  padding-top: 10px;
}

</style>