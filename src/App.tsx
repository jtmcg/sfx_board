import React from 'react';
import styled from 'styled-components';
import ButtonPanel from './components/ButtonPanel/ButtonPanel';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100vh;
  width: 100vw;
`;

const BodyContainer = styled.div`
  background-color: #e4e4e4e;
  width: 100%;
  height: 100%;
`;

const App = () => (
  <AppContainer>
    <SideBar />
    <BodyContainer>
      <Header />
      <ButtonPanel />
    </BodyContainer>

  </AppContainer>
)

export default App;
