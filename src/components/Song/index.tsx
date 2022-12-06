import { Text } from '$/components/Text';

import {
  PlayPauseIcon,
  RoundButton,
  SongImage,
  SongImageContainer,
  SongInfo,
  SongItem,
} from './styles';
import { SongProps } from './types';

export const Song = ({ song, toggle }: SongProps) => (
  <SongItem>
    <SongImageContainer>
      <SongImage src={song.image} alt={`cover image ${song.name}`} />
    </SongImageContainer>
    <SongInfo>
      <Text tag="p" variant="bodyBold">
        {song.name}
      </Text>
      <Text tag="p" variant="body">
        {song.author.name}
      </Text>
      <Text tag="p" variant="body">
        {song.description}
      </Text>
      <RoundButton onClick={() => toggle(song)}>
        <PlayPauseIcon />
      </RoundButton>
    </SongInfo>
  </SongItem>
);
