import { batchCreateServices, formatter } from '@alife/legion';

/**
 * 盒马前端应用 Service 规范：https://hippod.alibaba-inc.com/develop/fw9hqu
 * 在应用中对 Service 进行格式化：https://hippod.alibaba-inc.com/develop/im9m7c
 */
export default batchCreateServices({
  queryInventoryLogicLog: {
    url: '//rap2api.alibaba-inc.com/app/mock/2790/orderSkuApprove/list',
    formatter: formatter('object', {
      'data.list': 'data',
      'data.total': 'totalCount'
    })
  },

  getDeliveryDocks: {
    url: '//rap2api.alibaba-inc.com/app/mock/2410/getDeliveryDocks',
    formatter: ret => ({
      message: '',
      ...ret
    })
  },

  getOgnazation: {
    url: '//rap2api.alibaba-inc.com/app/mock/2410/getOgnazation'
  }
});
