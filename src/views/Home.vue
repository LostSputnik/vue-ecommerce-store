<template>
  <div class="home">
    <div class='banner'>
      <va-image class='banner-image' src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
    <Filter />
    <div class="products">
      <div v-for="product in filteredProducts" :key="product.id" class="single-product">
        <SingleProduct :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from '@/components/SingleProduct.vue'
import Filter from '@/components/Filter.vue'
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'

export default {
  name: 'Home',
  components: {
    SingleProduct,
    Filter
  },
  setup(){
    const store = useStore();
    
    const fetchAllProducts = () => store.dispatch('fetchAllProducts');

    store.state.allProducts.length ? console.log('existing') : fetchAllProducts();

    const allProducts = computed(() => store.state.allProducts);
    return {
      allProducts
    }
  },
  computed: {
    filteredProducts: {
      get(){
        let filter = undefined;
        if (this.$store.state.filterValue === 2){
          filter = "men's clothing"
        }
        else if (this.$store.state.filterValue === 3){
          filter = "women's clothing"
        }
        else if (this.$store.state.filterValue === 4){
          filter = "jewelery"
        }
        else if (this.$store.state.filterValue === 5){
          filter = "electronics"
        }

        return (!filter) ? this.allProducts : this.allProducts.filter(el => el.category == filter);
      }
    }
  }
}
</script>

<style scoped>
.products{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 40px;
}
.banner-image{
  height: 300px;
}

</style>
