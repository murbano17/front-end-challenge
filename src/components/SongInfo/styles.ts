import { SongImageContainer } from '$/components/Song/styles';
import styled from 'styled-components';

export const CoverImageContainter = styled(SongImageContainer)`
  min-width: 3rem;
  min-height: 3rem;
  width: 3rem;
  height: 3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 34.5rem;
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
