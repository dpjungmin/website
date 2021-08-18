import styled from "styled-components"

export const Container = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  justify-content: flex-start;
  flex-direction: column;
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  width: 735px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
  }
`

export const Hero = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  height: 322px;
  width: 100%;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
  }
`

export const Articles = styled.div`
  align-items: flex-start;
  width: 100%;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.heading};
  }

  div {
    margin: 10px 0;
  }

  a {
    padding-bottom: 3px;
  }
`
