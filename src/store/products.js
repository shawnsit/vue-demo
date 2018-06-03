import axios from 'axios';
import * as ActionTypes from './ActionTypes';

export default {
  state: {
    all: [],
  },
  getters: {
    allProducts: state => state.all,
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      const products = await axios({
        url: '/search?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&m=api4h5&abtest=25&wlsort=25&page=1',
        method: 'get',
      });
      commit(ActionTypes.FETCH_PRODUCTS_SUCCESS, products.data.listItem);
    },
  },
  mutations: {
    [ActionTypes.FETCH_PRODUCTS_SUCCESS]: (state, products) => {
      state.all = products;
    },
  },
};
