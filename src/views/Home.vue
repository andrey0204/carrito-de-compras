<template>
  <div class="home">
    <div class="title">NUETRO MENÚ</div>
    <div class="grid">
      <CategoryCard v-for="category in categories" :key="category.rid" :category="category" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    CategoryCard: () => import('../components/category-card.vue')
  },
  computed: {
    ...mapState(['categories'])
  }
}
</script>
<style lang="scss">
.home {
  .title {
    text-align: center;
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: #333;
    padding: 20px 0;
  }
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
