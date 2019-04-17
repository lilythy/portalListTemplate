import React from 'react';
import { inject } from '@royjs/core';
import { Table, Pagination } from '@alife/hippo';
import store from '../store';

const Column = Table.Column;
const ColumnGroup = Table.ColumnGroup;

@inject(store)
class TableArea extends React.Component {
  onPageNoChange = currentPage => {
    this.props.dispatch('setSearchValues', { currentPage });
  };

  onPageSizeChange = pageSize => {
    this.props.dispatch('setSearchValues', { pageSize, currentPage: 1 });
  };

  _renderOPer = (value, index, record) => {
    return (
      <div>
        <span className='alike-btn marginR4'>审批</span>
        <span className='alike-btn'>驳回</span>
      </div>
    );
  }

  render() {
    const { data, loading, total, searchValues } = this.props.state;
    const { pageSize, currentPage } = searchValues;
    return (
      <div>
        <Table dataSource={data} isLoading={loading} stickyTop={56}>
            <Column title="单据编号" dataIndex="orderNo" lock width={120} />
            <Column title="单据状态" dataIndex="auditResultName" lock width={100} />
            <Column title="机构" dataIndex="warehouseName" lock width={90} />
            <Column title="商品编号" dataIndex="skuCode" lock width={140} />
            <Column title="商品名称" dataIndex="skuName" width={80} />
            <Column title="审批状态" dataIndex="approveStatusName" width={80} />
            <Column title="申请人" dataIndex="createName" width={80} />
            <Column title="申请日期" dataIndex="createTime" type='date' width={80} />
            <Column title="审批数量" dataIndex="applyQuantity" width={90} />
            <Column title="建议订量" dataIndex="suggestQuantity" width={120} />
            <Column title="供应商" dataIndex="scmSupplierId" width={120} />
            <Column title="配送方式" dataIndex="deliverWayName" width={120} />
            <Column title="本次到货日" dataIndex="arrivedDate" type='date' width={80} />
            <Column title="订货周期" dataIndex="orderPeriod" width={80} />
            <Column title="订货箱规" dataIndex="replenishSpec" width={80} />
            <Column title="昨日销售" dataIndex="yestSales" width={80} />
            <Column title="7日均销" dataIndex="averageSales" width={80} />
            <Column title="在途库存" dataIndex="onRoadInventory" width={80} />
            <Column title="可用库存" dataIndex="actualInventory" width={80} />
            <Column title="安全库存" dataIndex="safeStockDays" width={80} />
            <Column title="固定安全保留量" dataIndex="safeInventoryQuantity" width={80} />
            <Column title="保质期" dataIndex="guaranteePeriod" width={80} />
            <Column title="陈列量" dataIndex="displayQuantity" width={80} />
            <Column title="操作" width={80} lock='right' cell={this._renderOPer} />
          </Table>
          <Pagination className='marginTop10' total={total} current={currentPage} pageSize={pageSize} onChange={this.onPageNoChange} onPageSizeChange={this.onPageSizeChange} />
      </div>
    );
  }
}
export default TableArea;
