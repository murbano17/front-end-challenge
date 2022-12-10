import DefaultBackwardIcon from '$/assets/icons/backward-fill.svg';
import DefaultPlayIcon from '$/assets/icons/play-fill.svg';
import DefaultRewindIcon from '$/assets/icons/rewind-fill.svg';
import DefaultPauseIcon from '$/assets/icons/stop-fill.svg';
import { RoundButton } from '$/components/Song/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0.5rem;
`;

export const PlayIconBig = styled(DefaultPlayIcon)`
  color: #22223d;
  fill: #22223d;
  width: 1rem;
  height: 1rem;
`;
export const PauseIconBig = styled(DefaultPauseIcon)`
  color: #22223d;
  fill: #22223d;
  width: 1rem;
  height: 1rem;
`;

export const BackwardIcon = styled(DefaultBackwardIcon)`
  color: white;
  fill: white;
  width: 1rem;
  height: 1rem;
`;

export const ForwardIcon = styled(DefaultRewindIcon)`
  color: white;
  fill: white;
  width: 1rem;
  height: 1rem;
`;

export const ToggleButton = styled(RoundButton)`
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
`;
