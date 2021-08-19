import styled from "styled-components"

export const Footer = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: var(--footer-height, 80px);
  padding: 15px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.footer.border};
`

export const SocialLinks = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: ${({ theme }) => theme.colors.footer.text};
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      border: none;

      svg {
        width: 20px;
        height: 20px;
        fill: ${({ theme }) => theme.colors.purple[10]};
      }
    }
  }
`

export const Credit = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.footer.text};
  font-family: var(--font-mono);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.solid};
  margin-top: 10px;

  svg {
    color: ${({ theme }) => theme.colors.footer.text};
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
`

export const Rss = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.footer.text};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  a {
    color: ${({ theme }) => theme.colors.footer.rss};
    border-bottom: 1px solid ${({ theme }) => theme.colors.footer.rssBorder};

    &:hover,
    &:active,
    &:focus {
      border-bottom: 1px solid
        ${({ theme }) => theme.colors.footer.rssBorderHover};
    }

    svg {
      width: 14px;
      height: 14px;
      transform: translate(-1px, -1.5px);
      color: ${({ theme }) => theme.colors.footer.rss};
    }
  }
`
