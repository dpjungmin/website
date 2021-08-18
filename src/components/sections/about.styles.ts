import styled from "styled-components"

export const Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 140px;

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    padding: 120px 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 100px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 0;
  }

  h1 {
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.dp};
  }

  .resume-button {
    ${({ theme }) => theme.mixins.flexCenter};
    ${({ theme }) => theme.mixins.smallButton};

    svg {
      color: ${({ theme }) => theme.colors.purple[5]};
      margin-left: 4px;
      width: 14px;
      height: 14px;
    }
  }
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  p {
    margin-bottom: 14px;
  }
`
