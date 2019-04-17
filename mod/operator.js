import React from 'react';
import { inject } from '@royjs/core';
import { Layout, Table, Operation, SearchForm, Search, Form, Pagination } from '@alife/hippo';
import store from '../store';
import service from '../service';

const { Section } = Layout;
const FormItem = Form.Item;

@inject(store)
class OperatorArea extends React.Component {
  onOperationClick = key => {
    if (key === 'export') {
      window.open('https://gw-office.alipayobjects.com/basement_prod/650deb79-c00b-49ca-add8-7d790d33de34.xlsx');
    }
  };

  render() {
    const { total } = this.props.state;
    return (
      <Operation
        buttonList={[
          { key: 'batchAgree', label: '批量审批', type: 'primary' },
          { key: 'batchRefuse', label: '批量驳回' }
        ]}
        linkList={[{ key: 'refresh' }]}
        total={total}
        onOperationClick={this.onOperationClick}
      />
    );
  }
}
export default OperatorArea;
