import React from 'react';
import { inject } from '@royjs/core';
import { Layout, Operation, SearchForm, Search, Form} from '@alife/hippo';
import { addExportTask, addImportTask } from '@alife/hippo-file-async/lib/simple';
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

  handleImport = () => {
    const { searchValues } = this.props.state;
    addImportTask(
        {
            async: false,
            ...searchValues
        },
        {
            bizName: 'f57d25da513e4f6b2c57901397e28d5a',
            bizType: 'brain_sku_upload'
        }, () => {
        // 数据列表
      }
    );
  }

  handleExport = () => {
    addExportTask({}, {
        bizName: 'f57d25da513e4f6b2c57901397e28d5a',
        bizType: 'bizType'
        }, () => {
            // 刷新列表
    });
  }

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
