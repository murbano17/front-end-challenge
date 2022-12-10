import { css } from 'styled-components';

export const typography = {
  title1: css`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 2.25rem;
    line-height: 2.925rem;
    letter-spacing: 0.0125rem;
  `,
  title2: css`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 1.75rem;
    line-height: 2.1rem;
    letter-spacing: 0.0125rem;
  `,
  body: css`
    font-size: 1rem;
    line-height: 1.5rem;
    font-feature-settings: 'tnum' on, 'lnum' on;
  `,
  bodyBold: css`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 1rem;
    line-height: 1.5rem;
    font-feature-settings: 'tnum' on, 'lnum' on;
  `,
  body2: css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-feature-settings: 'tnum' on, 'lnum' on;
  `,
  caption: css`
    font-size: 0.75rem;
    line-height: 1rem;
  `,
  captionBold: css`
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: 0.75rem;
    line-height: 1rem;
  `,

  nameBold: css`
    font-weight: 500;
    color: #484a69;
    font-size: 0.875rem;
  `,
  description: css`
    color: #484a69;
    font-size: 0.875rem;
    line-height: 1.25rem;
  `,
};
