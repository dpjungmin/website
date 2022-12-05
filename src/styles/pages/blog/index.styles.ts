import styled from "styled-components"
import { Link } from "gatsby"

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
  height: 222px;
  width: 100%;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
    font-weight: 400;
  }
`

export const Articles = styled.div`
  align-items: flex-start;
  width: 100%;
  min-height: 40vh;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.heading};
    color: ${({ theme }) => theme.colors.dp};
  }
`

export const ArticleWrapper = styled.div`
  padding: 24px 0;
`

export const Article = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  padding: 1rem;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgb(0 0 0 / 12%) 0px 12px 20px 0px;
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    padding-bottom: 3px;
    border-bottom: none;
  }

  span {
    font-family: var(--font-mono);
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-left: 1px;
  }
`

export const Flex = styled.div`
  svg {
    height: 168px;
    width: 168px;
    margin-bottom: 20px;
  }
`
