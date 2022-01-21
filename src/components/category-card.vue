<template>
  <Card>
    <template>
      <span v-if="category.properties.labelTag" class="label">{{ category.properties.labelTag }}</span>
      <img @click="tocategory(category.slug)" :src="category.image.sm" :alt="category.name">
      <div @click="tocategory(category.slug)" class="name">
        {{ category.name }}
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  props: ['category'],
  components: {
    Card: () => import('./card.vue')
  },
  name: 'card-category',
  methods: {
    tocategory (slug) {
      this.$router.push('/categoria/' + slug)
    }
  }
}
</script>
