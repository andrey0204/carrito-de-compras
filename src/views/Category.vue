<template>
  <div class="category">
    <div class="grid">
      <ProductCard v-for="product in products" :key="product.product.rid" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Category',
  components: {
    ProductCard: () => import('../components/product-card.vue')
  },
  mounted () {
    this.$store.dispatch('loadCategory', this.$route.params.category)
  },
  computed: {
    ...mapState(['category']),
    products () {
      return this.category?.products || []
    }
  }
}
</script>

<style lang="scss">
.category {
  .grid {
    display: flex;
    justify-content: center;
    padding-top: 15px;
    justify-content: center;
    gap: 15px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;
    flex-wrap: wrap;
  }
}
</style>
