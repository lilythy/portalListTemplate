import React from 'react';
import { inject } from '@royjs/core';
import moment from 'moment';
import { Layout, SearchForm, Form, DatePicker, Field } from '@alife/hippo';
import { Basic, Store, User, Department, Supplier } from '@alife/hippo-filter-collection';
import store from '../store';
import service from '../service';

const { Section } = Layout;
const FormItem = Form.Item;

@inject(store)
class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.field = new Field(this);
  }

  componentDidMount() {
    this.props.dispatch('setSearchValues');
  }

  onSearch = searchValues => {
    this.props.dispatch('setSearchValues', {
      ...searchValues,
      pageNo: 1
    });
  };

  render() {
    const { data, loading, total, searchValues } = this.props.state;
    return (
      <Section border={false}>
        <SearchForm field={this.field} onSearch={this.onSearch} onReset={this.onSearch}>
          <FormItem name="approveStatus"
            label="审批状态"
            placeholder="请选择"
            component={Basic}
            url='http://rap2api.alibaba-inc.com/app/mock/2790/orderSkuApprove/approveStatusList'
          />
          <FormItem
            name="createTime"
            label="申请日期"
            component={DatePicker}
            defaultValue={moment().format('YYYY-MM-DD')}
            placeholder="请选择日期"
          />
          <FormItem
            name="createId"
            label="申请人"
            placeholder="请输入申请人"
            component={User}
          />
          <FormItem
            name="orderNo"
            label="申请编号"
            placeholder="请输入申请编号"
            component='input'
          />
          <FormItem
            name="warehouseCode"
            label="申请机构"
            placeholder="请输入申请机构"
            component={Store}
          />
          <FormItem
            name="deptTypeNo"
            label="申请部门"
            placeholder="请输入申请部门"
            component={Department}
          />
          <FormItem
            name="skuCode"
            label="商品信息"
            placeholder="请输入商品编码/名称"
            component={Department}
          />
        </SearchForm>
      </Section>
    );
  }
}
export default SearchArea;
