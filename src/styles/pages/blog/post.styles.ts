import styled from "styled-components"

export const Container = styled.main`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  padding: 148px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.post}) {
    padding: 100px 14px;
  }
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  margin: 0;

  span {
    font-family: var(--font-mono);
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: 10px;
  }
`

export const Article = styled.article`
  padding-top: 60px;
  font-size: ${({ theme }) => theme.fontSizes.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.post}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  p {
    line-height: ${({ theme }) => theme.lineHeights.loose};
    margin: 0 0 1.5rem;
  }

  u {
    text-underline-offset: 5px;
    text-decoration-color: ${({ theme }) => theme.colors.text.underline};

    &:hover {
      text-decoration-color: ${({ theme }) => theme.colors.text.secondary};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.heading};
  }

  h2 {
    margin: 48px 0 24px;
  }

  h3 {
    margin: 36px 0 18px;
  }
`
