import styled from "styled-components"

export const Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  font-size: calc(10px + 0.33vw);
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  padding-top: 100px;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
    margin-bottom: 20px;
    font-weight: 600;

    @media (max-width: 480px) and (min-height: 700px) {
      padding-bottom: 10vh;
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    line-height: ${({ theme }) => theme.lineHeights.solid};
    margin-top: 20px;
  }
`

export const Text = styled.div`
  margin-bottom: 32px;
`

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: -10px;
  padding: 0;
  list-style: none;

  li {
    transition-duration: ${({ theme }) =>
      theme.transition.speed.default} !important;

    a {
      padding: 12px;
      border: none;
    }

    &:not(:last-child) {
      margin-right: 12px;
    }

    &:hover,
    &:focus {
      transform: translateY(-3px);

      svg {
        color: ${({ theme }) => theme.colors.socialMediaIcon.colorHover};
      }
    }

    svg {
      color: ${({ theme }) => theme.colors.socialMediaIcon.color};
      fill: ${({ theme }) => theme.colors.socialMediaIcon.fill};
      width: 32px;
      height: 32px;
    }
  }
`
