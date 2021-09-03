import * as React from 'react';
import styled from 'styled-components';
import { sidebar, space } from '../../style/stylesheet';

const SideBarContainer = styled.div`
  z-index: ${sidebar.zindex};
  min-width: ${sidebar.width};
  height: 100%;
  color: ${sidebar.color};
  background-color: ${sidebar.backgroundColor};
  padding: ${space.small};
`;

const SideBar = () => {
  return (
    <SideBarContainer >
      SIDEBAR PLACEHOLDER
    </SideBarContainer>
  )
}

export default SideBar;