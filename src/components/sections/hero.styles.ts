import styled from "styled-components"

export const Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  h1 {
    font-size: 4.5em;
    font-weight: 600;
    margin-bottom: 0;
  }

  h3 {
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 4px;
  }

  p {
    font-size: 1.6em;
    font-weight: 400;
    line-height: 1.4;
    max-width: 28em;
    margin-top: 14px;
  }
`
