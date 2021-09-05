import * as React from 'react';
import styled, { css } from 'styled-components';
import { roundbutton, space } from '../../style/stylesheet';
//import * as player from 'react-audio-player';

const RoundButton = styled.div<{pressed: boolean}>(({pressed}) => css`
  height: ${roundbutton.height};
  width: ${roundbutton.width};
  border-radius: 50%;
  background-color: ${roundbutton.color};
  align-self: center;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.80);
  margin: ${space.small};

  ${pressed && 'box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.4); background-color: #0000ee;'}

`);;

const PlayFXButton = () => {
  const [playing, setPlaying] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);

  const playFX = () => {
    if (playing) return;
    setPlaying(true)
    // play sound
    setPlaying(false)
  }

  return (
    <RoundButton pressed={pressed} onClick={playFX} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)}/>
  )
}

export default PlayFXButton;