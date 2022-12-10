import { SongImage } from '$/components/Song/styles';
import { SongData } from '$/types/Song';

import { ContainerColumn, CoverImageContainter, Text, Wrapper } from './styles';

export const SongInfo = ({ ...currentSong }: SongData) => (
  <Wrapper>
    <CoverImageContainter>
      <SongImage src={currentSong.image} />
    </CoverImageContainter>
    <ContainerColumn>
      <Text>{currentSong.name}</Text>
      <Text>{currentSong.author.name}</Text>
    </ContainerColumn>
  </Wrapper>
);
