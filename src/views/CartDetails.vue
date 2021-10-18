<template>
  <div class="cart-container">
    <div v-if="!cartItems.length" class="no-item-cart">
        <h1>No Items in Cart</h1>
    </div>
    <div class="container" v-if="cartItems.length">
      <ul class="responsive-table">
          <li class="table-header">
          <div class="col col-1">Product ID</div>
          <div class="col col-2">Product</div>
          <div class="col col-3">Price</div>
          </li>
          <li v-for="item in cartItems" :key="item.id" class="table-row">
              <div class="col col-1" data-label="Product ID">#{{item.id}}</div>
              <div class="col col-2" data-label="Product">{{item.title}}</div>
              <div class="col col-3" data-label="Price">{{item.price}}$</div>
          </li>
          <va-divider>
              <span class="px-2">Summary</span>
          </va-divider>
          <li>
              <div class="col col-1" data-label="Product ID">-</div>
              <div class="col col-2" data-label="Product"><b>Total Items:</b> {{cartItems.length}}</div>
              <div class="col col-3" data-label="Price"><b>Total Price: </b>{{totalPrice}}$</div>
          </li>
      </ul>
      <va-button outline to='/checkout-success'>Checkout</va-button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    components: {
    },
    setup(){
        const store = useStore();
        const cartItems = computed(() => store.state.cart);
        const totalPrice = computed(() => store.state.cart.reduce((sum, current) => sum + current.price, 0));

        return {
            cartItems,
            totalPrice
        }
    } 
}
</script>

<style scoped>
.no-item-cart {
  box-sizing: border-box;
  padding-top: 30px;
}
.cart-container {
  min-height: 635px;
  margin-bottom: 10px;
}

.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.responsive-table .table-header {
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-1 {
  flex-basis: 10%;
}
.responsive-table .col-2 {
  text-align: left;
  flex-basis: 40%;
}
.responsive-table .col-3 {
  flex-basis: 25%;
}
.responsive-table .col-4 {
  flex-basis: 25%;
}
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #6C7A89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}

</style>