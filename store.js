import { Store } from '@royjs/core';
import service from './service';

const store = new Store({
  state: {
    loading: false,
    total: 0,
    searchValues: {
      pageSize: 50,
      pageNo: 1
    },
    data: []
  },
  actions: {
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

    setSearchValues(state, payload = {}) {
      const values = {
        ...payload
      };

      state.searchValues.set(values);
      this.dispatch('search');
    }
  }
});

export default store;
