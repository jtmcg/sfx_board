import * as React from 'react';
import styled from 'styled-components';
import { space, soundfx, font } from '../../style/stylesheet';
import PlayFXButton from '../PlayFXButton/PlayFXButton';

const SoundFXContainer = styled.div`
  border: 1px solid red; 
  margin: ${space.small};
  max-width: 20%;
  max-height: 20%;
  min-width: ${soundfx.width};
  min-height: ${soundfx.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const FXButtonLabel = styled.div`
  font-size: ${font.h1.size};
  font-weight: ${font.h1.weight};
  text-align: center;
  margin: ${space.small};
`;

const SoundFX = () => (
  <SoundFXContainer >
    <PlayFXButton />
    <FXButtonLabel>SFX Label</FXButtonLabel>
  </SoundFXContainer>
)

export default SoundFX;