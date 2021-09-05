import * as React from 'react';
import styled from 'styled-components';
import { header, space } from '../../style/stylesheet';
import NowPlaying from '../NowPlaying/NowPlaying';
import { SongData } from '../../App';

const HeaderContainer = styled.div`
  display: flex;
  background-color: ${header.backgroundcolor};
  min-height: ${header.minheight};
  color: ${header.color};
  padding: ${space.large};
  align-content: center;
  flex-flow: row wrap;
`;

interface HeaderProps {
  currentSong: SongData | undefined;
}

const Header = ({currentSong}: HeaderProps) => {
  
  return (
    <HeaderContainer>
      <NowPlaying currentSong={currentSong} />
    </HeaderContainer>
  )
}

export default Header;