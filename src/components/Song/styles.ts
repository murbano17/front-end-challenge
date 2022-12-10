import DefaultAddFavIcon from '$/assets/icons/heart-add.svg';
import DefaultFavIcon from '$/assets/icons/heart-fill.svg';
import DefaultPlayIcon from '$/assets/icons/play-fill.svg';
import DefaultPauseIcon from '$/assets/icons/stop-fill.svg';
import styled from 'styled-components';

export const SmallText = styled.p`
  font-size: 0.75rem;
  color: #484a69;
`;

export const SongImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SongImageContainer = styled.div`
  min-width: 8.75rem;
  min-height: 8.75rem;
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 0.75rem;
  overflow: hidden;
`;
export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SongItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1.25rem;
  width: 100%;
`;

export const PauseIcon = styled(DefaultPauseIcon)`
  color: white;
  fill: white;
  width: 0.6rem;
  height: 0.6rem;
`;
export const PlayIcon = styled(DefaultPlayIcon)`
  color: white;
  fill: white;
  width: 0.483rem;
  height: 0.631rem;
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
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  gap: 1.25rem;
`;

export const Tag = styled.p`
  font-size: 0.75rem;
  background: #e1f4fb;
  border-radius: 2.938rem;
  padding: 0.25rem 0.5rem;
  font-weight: 400;
  width: min-content;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const TransparentButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const AddFav = styled(DefaultAddFavIcon)`
  width: 1.25rem;
  height: 1.25rem;
  color: #b2b6ca;
  fill: #b2b6ca;
`;

export const FavIcon = styled(DefaultFavIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;
