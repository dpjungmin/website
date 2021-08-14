import styled from "styled-components"

export const Container = styled.main`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 0 auto;
  width: 100%;
  max-width: 700px;
  min-height: 100vh;
  padding: 248px 0;

  @media (max-width: 720px) {
    padding: 200px 14px;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.heading};
  line-height: ${({ theme }) => theme.lineHeights.heading};
  margin: 0 0 1.45rem;
`

export const Article = styled.article`
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.loose};
    margin: 0 0 1.5rem;

    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  }

  h2 {
    margin: 48px 0 24px;
  }

  h3 {
    margin: 36px 0 18px;
  }
`