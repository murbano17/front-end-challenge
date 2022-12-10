import { StyledSpinner, Wrapper } from './styles';

export const Spinner = () => (
  <Wrapper>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  </Wrapper>
);
