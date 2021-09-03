import * as React from 'react';
import styled from 'styled-components';
import { header, space } from '../../style/stylesheet';

const HeaderContainer = styled.div`
  display: flex;
  background-color: ${header.backgroundcolor};
  min-height: ${header.minheight};
  color: ${header.color};
  padding: ${space.large};
  align-content: center;
  flex-flow: row wrap;
`;

const Header = () => {
  return (
    <HeaderContainer>
      HEADER PLACEHOLDER
    </HeaderContainer>
  )
}

export default Header;