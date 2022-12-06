import DefaultPlayIcon from '$/assets/icons/play-fill.svg';
import styled from 'styled-components';

export const SongItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.25rem;
  width: 100%;
`;

export const SongImageContainer = styled.div`
  min-width: 8.75rem;
  min-height: 8.75rem;
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 0.75rem;
  overflow: hidden;
`;

export const SongImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const RoundButton = styled.button`
  background: #22223d;
  border-radius: 44px;
  width: 2rem;
  height: 2rem;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PlayPauseIcon = styled(DefaultPlayIcon)`
  color: white;
  fill: white;
  width: 0.483rem;
  height: 0.631rem;
`;
