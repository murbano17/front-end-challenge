import { SongImage } from '$/components/Song/styles';

import { ContainerColumn, CoverImageContainter, Text, Wrapper } from './styles';
import { SongInfoProps } from './types';

export const SongInfo = ({ currentSong }: SongInfoProps) => (
  <Wrapper>
    <CoverImageContainter>
      <SongImage src={currentSong?.image} />
    </CoverImageContainter>
    <ContainerColumn>
      <Text>{currentSong?.name}</Text>
      <Text>{currentSong?.author.name}</Text>
    </ContainerColumn>
  </Wrapper>
);
