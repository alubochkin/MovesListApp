import React, { PureComponent } from 'react';
import styled from 'styled-components';

export default class PageLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return <LayoutPage>{children}</LayoutPage>;
  }
}

const LayoutPage = styled.section.attrs(() => ({ className: 'conteiner' }))`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;
`;
