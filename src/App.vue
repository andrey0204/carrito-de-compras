<template>
  <div id="app">
    <div id="nav">
      <div class="nav-title">
        BurgerCats - Shopping Cart from Andrey Macias
      </div>
      <div class="shopping-cart" @click="showCart = !showCart">
        <span class="material-icons">shopping_cart</span>
      </div>
    </div>
    <router-view/>
    <div class="cart" v-show="showCart">
      <h3>Carrito de compras</h3>
      <div v-if="isCart" class="cart-content">
        <div class="items">
          <div v-for="item in cart.items" :key="item.item" class="item">
            <img :src="item.product.image.sm">
            <div class="item-name">{{item.product.name}}</div>
            <div class="item-price">${{ formatPrice(item.price) }}</div>
          </div>
        </div>
        <div class="info">
          Total: ${{formatPrice(cart.totalProducts)}}
        </div>
      </div>
      <div v-else class="empty-cart" >
        carrito de compras vacio
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('loadCategories')
  },
  data () {
    return {
      showCart: false
    }
  },
  methods: {
    formatPrice (p) {
      const price = (p || 0).toString().split('').reverse()
      return price.reduce((a, e, i) =>
        (i !== 0 && i % 3 === 0)
          ? (e + '.' + a)
          : e + a, '')
    }
  },
  computed: {
    ...mapState(['cart']),
    isCart () {
      return !!this.cart.cart
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#nav {
  background-color: #9a9a9a;
  color: #efefef;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  .nav-title {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    cursor: pointer;
  }
  .shopping-cart {
    font-size: 35px;
    cursor: pointer;
  }
}

.cart {
  position: fixed;
  top: 0;
  z-index: 3;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  background: #9a9a9a;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  h3 {
    text-align: center;
    color: #efefef;
    font-size: 25px;
    padding: 15px 0;
    line-height: 30px;
  }
  .empty-cart {
    align-self: center;
    flex: 1;
    display: flex;
    align-items: center;
    color: #efefef;
  }
  .cart-content {
    width: 100%;
    padding: 15px;
    img {
      width: 100%;
    }
    .item-name {
      color: #efefef;
      padding: 10px 0;
    }
    .item-price {
      color: #efefef;
      font-weight: 700;
    }
    .info {
      text-align: center;
      font-size: 25px;
      font-weight: 700;
      color: #efefef;
      padding-top: 20px;
    }
  }
}

</style>
