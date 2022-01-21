import Vue from 'vue'
import Vuex from 'vuex'

const BusinessId = 'burgercats.inoutdelivery.com'
const apiUrl = 'https://api01.inoutdelivery.com.co/v1'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    category: {},
    cart: {}
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    },
    setCategory (state, category) {
      state.category = category
    },
    setCart (state, cart) {
      state.cart = cart
    }
  },
  actions: {
    async loadCategories ({ commit }) {
      try {
        const response = await fetch(`${apiUrl}/categories?business=${BusinessId}`)
        const result = await response.json()
        if (result.length) {
          commit('setCategories', result)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async loadCategory ({ commit }, category) {
      try {
        const response = await fetch(`${apiUrl}/products/by-category?business=${BusinessId}&category=${category}`)
        const result = await response.json()
        if (result[0]) {
          commit('setCategory', result[0])
        }
      } catch (error) {
        console.log(error)
      }
    },
    async addCart ({ state, commit }, product) {
      try {
        let url = `${apiUrl}/cart/`
        let method = 'POST'
        if (state.cart.cart) {
          url += state.cart.cart
          method = 'PUT'
        }
        const response = await fetch(url, {
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            business: BusinessId,
            items: [
              {
                product: product.product.rid,
                amount: 1,
                category: state.category.rid
              }
            ],
            returnCart: true
          })
        })
        console.log(response)
        const result = await response.json()
        if (result.cart) {
          commit('setCart', result)
        } else if (result.error) {
          alert(result.error)
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
