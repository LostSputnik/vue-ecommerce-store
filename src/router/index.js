import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductPage from '../views/ProductPage.vue'
import CartDetails from '../views/CartDetails.vue'
import About from '../views/About.vue'
import CheckoutSuccess from '../views/CheckoutSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products/:id',
    name: 'ProductPage',
    component: ProductPage,
    props: true
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CartDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/checkout-success',
    name: 'CheckoutSucces',
    component: CheckoutSuccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
