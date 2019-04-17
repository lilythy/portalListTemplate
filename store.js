import { Store } from '@royjs/core';
import service from './service';

const store = new Store({
  state: {
    loading: false,
    total: 0,
    searchValues: {
      pageSize: 50,
      currentPage: 1
    },
    data: []
  },
  actions: {
    setSearchValues(state, payload = {}) {
      const values = {
        ...state.searchValues,
        ...payload
      };

      state.set('searchValues', values);
      this.dispatch('search');
    },
    resetSearchValues(state, payload = {}) {
      const values = {
        pageSize: 50,
        currentPage: 1
      };

      state.set('searchValues', values);
      this.dispatch('search');
    },
    async search(state) {
      state.set('loading', true);
      try {
        const data = await service.queryInventoryLogicLog(state.searchValues.toJSON());
        state.set('data', data.list);
        state.set('total', data.total);
      } catch (err) {
        // catch error
      }
      state.set('loading', false);
    },
  }
});

export default store;
