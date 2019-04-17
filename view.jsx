import React from 'react';
import { inject } from '@royjs/core';
import styled from 'styled-components';
import { Layout } from '@alife/hippo';
import tokens from '@alife/hippo/variables';
import store from './store';
import SearchArea from './mod/searchArea'
import Operator from './mod/operator'
import TableArea from './mod/tableArea'
import './index.scss';

const { Section } = Layout;
const StyledLayout = styled(Layout)`
  margin: 12px;

  .search-list-body {
    box-shadow: ${tokens.shadow1};
  }

  .search-list-body .body > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

/**
 * 基础BasicNormaList
 * @class BasicNormalList
 */
@inject(store)
class BasicSearchList extends React.Component {

  render() {
    return (
      <StyledLayout>
        <SearchArea/>
        <Section className="search-list-body">
          <Operator/>
          <TableArea/>
        </Section>
      </StyledLayout>
    );
  }
}
export default BasicSearchList;
