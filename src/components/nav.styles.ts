import styled, { css } from "styled-components"

type HeaderProps = {
  scrollDirection: "up" | "down"
  scrolledToTop: boolean
  isHome: boolean
}

export const Header = styled.header<HeaderProps>`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height, 100px);
  background-color: transparent;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all ${({ theme }) => theme.transition.default};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    padding: 0 25px;
  }

  a {
    border: none;
  }

  ${(props) =>
    !props.isHome &&
    css`
      position: relative;
    `}

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    props.isHome &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(0px);
      background-color: var(--nav-scroll-up-bg);
      box-shadow: var(--nav-box-shadow);
    `}

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    props.isHome &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(calc(var(--nav-scroll-height) * -1));
      box-shadow: var(--nav-box-shadow);
    `}
`

export const Nav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: ${({ theme }) => theme.colors.logo.color};
      width: 84px;
      height: 84px;

      &:hover,
      &:focus {
        svg {
          fill: ${({ theme }) => theme.colors.logo.hoverFill};
        }
      }

      svg {
        transform: translateX(-10px);
        fill: none;
        user-select: none;
      }
    }
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: ${({ theme }) => theme.fontSizes.xs};

      a {
        padding: 10px;
        color: ${({ theme }) => theme.colors.text.secondary};

        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.link.color};
          font-size: ${({ theme }) => theme.fontSizes.xxs};
          text-align: right;
        }

        &:hover,
        &:focus,
        &:active {
          color: ${({ theme }) => theme.colors.link.color};
        }
      }
    }
  }

  .blog-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`
