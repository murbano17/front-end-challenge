import { SongImage } from '$/components/Song/styles';
import { SongData } from '$/types/Song';

import {
  ContainerColumn,
  ContainerRow,
  CoverImageContainter,
  FixedPlayer,
  PauseIconBig,
  PlayIconBig,
  Text,
  ToggleButton,
} from './styles';
import { useAudioPlayer } from './useAudioPlayer';

export const Player = (song: SongData) => {
  const { playing, toggle } = useAudioPlayer(song.audio.url);

  return (
    <FixedPlayer>
      <ContainerRow>
        <CoverImageContainter>
          <SongImage src={song.image} />
        </CoverImageContainter>
        <ContainerColumn>
          <Text>{song.name}</Text>
          <Text>{song.author.name}</Text>
        </ContainerColumn>
      </ContainerRow>
      <button>Go back</button>
      <ToggleButton onClick={toggle}>
        {playing ? <PauseIconBig /> : <PlayIconBig />}
      </ToggleButton>
      <button>Go ahead</button>
    </FixedPlayer>
  );
};
