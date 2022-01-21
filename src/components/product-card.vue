<template>
  <Card>
    <span v-if="product.product.properties.labelTag" class="label">{{ product.product.properties.labelTag }}</span>
    <img :src="product.product.image.sm" :alt="product.product.name">
    <div class="name">
      {{ product.product.name }}
    </div>
    <div class="description">
      {{ product.product.descriptionShort }}
    </div>
    <div @click="addCard" class="add-btn">
      Agregar ${{ formatPrice }}
    </div>
  </Card>
</template>

<script>
export default {
  name: 'product-card',
  props: ['product'],
  components: {
    Card: () => import('./card.vue')
  },
  computed: {
    formatPrice () {
      const price = (this.product?.product?.price || 0).toString().split('').reverse()
      return price.reduce((a, e, i) =>
        (i !== 0 && i % 3 === 0)
          ? (e + '.' + a)
          : e + a, '')
    }
  },
  methods: {
    addCard () {
      this.$store.dispatch('addCart', this.product)
    }
  }
}
</script>
<style lang="scss">
.description {
  text-align: center;
  padding: 15px 10px;
  text-align: center;
  color: #efefef;
  font-size: 15px;
}
.add-btn {
  width: fit-content;
  align-self: center;
  padding: 15px 10px;
  background-color: #efefef;
  color: #9a9a9a;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 15px;
}
</style>
