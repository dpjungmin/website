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
    color: ${({ theme }) => theme.colors.dp};
  }
`

export const Wrapper = styled.div`
  padding-top: 24px;
`

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    padding-bottom: 3px;
    border-bottom: none;

    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.colors.link.color};
    }
  }

  span {
    font-family: var(--font-mono);
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-right: 5px;
  }
`
