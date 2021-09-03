import * as React from 'react';
import styled from 'styled-components';
import { space, soundfx } from '../../style/stylesheet';

const SoundFXContainer = styled.div`
  border: 1px solid red; 
  margin: ${space.small};
  max-width: 20%;
  max-height: 20%;
  min-width: ${soundfx.width};
  min-height: ${soundfx.height};
`;

const SoundFX = () => (
  <SoundFXContainer >
    SOUNDFX PLACHOLDER
  </SoundFXContainer>
)

export default SoundFX;