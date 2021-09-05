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

export interface SongData{
  title: string;
  artist: string;
  duration: string;
  thumbnail?: string;
}

const App = () => {
  const [currentSong, setCurrentSong] = React.useState<SongData | undefined>(undefined);

  return (
    <AppContainer>
      <SideBar setCurrentSong={setCurrentSong}/>
      <BodyContainer>
        <Header currentSong={currentSong}/>
        <ButtonPanel />
      </BodyContainer>

    </AppContainer>
  );
}

export default App;
