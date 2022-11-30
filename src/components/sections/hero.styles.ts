import { fontSizes } from "@theme/font-sizes"
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
    margin-bottom: 20px;
    font-size: clamp(${fontSizes.sm}, 5vw, ${fontSizes.md});
    font-weight: 400;

    @media (max-width: 480px) and (min-height: 700px) {
      padding-bottom: 10vh;
    }
  }

  p {
    font-size: 1.6em;
    line-height: 1.4;
    margin-top: 10px;
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
