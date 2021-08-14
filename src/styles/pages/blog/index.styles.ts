import styled from "styled-components"

export const Container = styled.main`
  /* max-width: 1200px; */
`

export const Hero = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  height: 322px;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
  }
`

export const Articles = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.heading};

    span {
      font-size: ${({ theme }) => theme.fontSizes.lg};
      color: ${({ theme }) => theme.colors.grey[60]};
    }
  }

  div {
    margin: 10px 0;
  }
`
