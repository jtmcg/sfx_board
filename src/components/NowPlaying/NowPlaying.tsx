import * as React from 'react';
import styled, { css } from 'styled-components';
import { space, font } from '../../style/stylesheet';
import { SongData } from '../../App';

const NowPlayingWrapper = styled.div`
  display: flex;
  flex-direction: row wrap;
  margin: ${space.small}
`;

interface NowPlayingProps {
  currentSong?: SongData;
}

const Thumbnail = styled.div<{thumbnail?: string}>(({thumbnail}) => css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0px ${space.medium} 0px 0px;
  background-color: black;
  ${thumbnail && `background-image: ${thumbnail};`}
`)

const SongDetailsWrapper = styled.div`
  display: block;
  justify-content: left;
`;

const Title = styled.div`
  font-size: ${font.h1.size};
`;

const SongDetailsSubheader = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-size: ${font.subtext.size};
  font-weight: ${font.subtext.weight};
`;

const Artist = styled.p``;

const Duration = styled.p``;

const SongDetails = ({title, artist, duration}: Omit<SongData, 'thumbnail'>) => {
  return (
    <SongDetailsWrapper>
      <Title>{title}</Title>
      <SongDetailsSubheader>
        <Artist>{artist}</Artist>
        <Duration> - {duration}</Duration>
      </SongDetailsSubheader>
    </SongDetailsWrapper>
  )
};

const NowPlaying = ({currentSong}: NowPlayingProps) => {
  const thumbnail = currentSong?.thumbnail ?? '', 
    title = currentSong?.thumbnail ?? 'No Song Playing', 
    artist = currentSong?.thumbnail ?? 'artist', 
    duration = currentSong?.thumbnail ?? 'duration';
  
  return(
    <NowPlayingWrapper>
      <Thumbnail thumbnail={thumbnail}/>
      <SongDetails title={title} artist={artist} duration={duration}/>
    </NowPlayingWrapper>
  )
}

export default NowPlaying;