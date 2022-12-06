import DefaultPlayIcon from '$/assets/icons/play-fill.svg';
import DefaultPauseIcon from '$/assets/icons/stop-fill.svg';
import { RoundButton, SongImageContainer } from '$/components/Song/styles';
import styled from 'styled-components';

export const FixedPlayer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #22223d;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 16px 16px 0px 0px;
  color: white;
`;

export const CoverImageContainter = styled(SongImageContainer)`
  min-width: 3rem;
  min-height: 3rem;
  width: 3rem;
  height: 3rem;
`;

export const ToggleButton = styled(RoundButton)`
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
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

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  color: white;
  font-weight: 400;
  font-size: 0.875rem;
`;

export const Span = styled.span`
  color: #c9cddb;
  font-weight: 400;
  font-size: 0.75rem;
`;
