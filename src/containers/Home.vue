<template>
  <ul>
    <li v-for="product in products" v-bind:key="product.item_id">
      {{ product.name }}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    products: 'allProducts',
  }),
  methods: mapActions([
    'fetchProducts',
  ]),
  created() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style>

</style>
