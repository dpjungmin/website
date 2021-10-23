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
    font-size: 4.5em;
    font-weight: 600;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.6em;
    font-weight: 400;
    line-height: 1.4;
    max-width: 32em;
    margin-top: 14px;
  }
`

export const Text = styled.div`
  margin-bottom: 24px;
`

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    transition-duration: ${({ theme }) =>
      theme.transition.speed.default} !important;

    a {
      padding: 12px;
      border: none;
      /* border: 1px dashed ${({ theme }) => theme.colors.orange[40]}; */
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
      width: 24px;
      height: 24px;
    }
  }
`
