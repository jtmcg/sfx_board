import * as React from 'react';
import styled from 'styled-components';
import SoundFX from '../SoundFX/SoundFX';
import { buttonpanel, space } from '../../style/stylesheet';

const ButtonPanelContainer = styled.div`
  color: ${buttonpanel.color};
  backgroundcolor: ${buttonpanel.backgroundcolor};
  margin: ${space.medium}
`;

const ButtonGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ButtonPanel = () => {
  return (
    <ButtonPanelContainer>
      BUTTONPANEL PLACEHOLDER
      <ButtonGrid>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
        <SoundFX/>
      </ButtonGrid>
    </ButtonPanelContainer>
  )
}

export default ButtonPanel;