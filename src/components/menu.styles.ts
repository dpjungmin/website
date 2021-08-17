import styled from "styled-components"

export const Menu = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    display: block;
  }
`

type HamburgerButtonProps = {
  menuOpen: boolean
}

export const HamburgerButton = styled.button<HamburgerButtonProps>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: ${({ theme }) => theme.colors.dp};
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? "0.12s" : "0s")};
    transform: rotate(${(props) => (props.menuOpen ? "225deg" : "0deg")});
    transition-timing-function: cubic-bezier(
      ${(props) =>
        props.menuOpen ? "0.215, 0.61, 0.355, 1" : "0.55, 0.055, 0.675, 0.19"}
    );

    &:before,
    &:after {
      content: "";
      display: absolute;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: var(--border-radius);
      background-color: ${({ theme }) => theme.colors.dp};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &:before {
      width: ${(props) => (props.menuOpen ? "100%" : "120%")};
      top: ${(props) => (props.menuOpen ? "0" : "-10px")};
      opacity: ${(props) => (props.menuOpen ? "0" : "1")};
      transition: ${(props) =>
        props.menuOpen ? "var(--ham-before-active)" : "var(--ham-before)"};
    }

    &:after {
      width: ${(props) => (props.menuOpen ? "100%" : "80%")};
      bottom: ${(props) => (props.menuOpen ? "0" : "-10px")};
      transform: rotate(${(props) => (props.menuOpen ? "-90deg" : "0deg")});
      transition: ${(props) =>
        props.menuOpen ? "var(--ham-after-active)" : "var(--ham-after)"};
    }
  }
`

type SidebarProps = {
  menuOpen: boolean
}

export const Sidebar = styled.aside<SidebarProps>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--sidebar-background);
    box-shadow: var(--sidebar-box-shadow);

    z-index: 9;

    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")};
    transition: all ${({ theme }) => theme.transition.default};
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(
        ${({ theme }) => theme.fontSizes.sm},
        4vw,
        ${({ theme }) => theme.fontSizes.lg}
      );

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }

      &:before {
        content: "0" counter(item) ".";
        display: block;
        margin-bottom: 5px;
        color: ${({ theme }) => theme.colors.link.color};
        font-size: ${({ theme }) => theme.fontSizes.sm};
      }
    }

    a {
      color: ${({ theme }) => theme.colors.black};
      width: 100%;
      padding: 3px 20px 20px;

      &:hover,
      &:active,
      &:focus {
        color: ${({ theme }) => theme.colors.link.color};
        outline: 0;
      }
    }
  }

  .blog-button {
    ${({ theme }) => theme.mixins.bigButton}
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 10% auto 0;
    padding: 18px 50px;
    width: max-content;
  }
`
