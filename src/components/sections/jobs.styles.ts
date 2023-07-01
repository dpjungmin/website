import styled from "styled-components"

export const Section = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 140px;
  margin-top: -100px;
  font-size: calc(10px + 0.33vw);

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    padding: 120px 60px;
    margin-top: -80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 100px 30px;
    margin-top: -60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 80px 0;
    margin-top: -40px;
  }

  h1 {
    font-size: 2.2em;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.dp};
  }
`

export const JobList = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.grey[40]};
      }
    }
  }
`

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  padding: 2rem;

  h3 {
    font-weight: 600;
    font-size: calc(15px + 0.33vw);

    a {
      border-bottom: none;
    }
  }

  .range {
    font-family: var(--font-mono);
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .location {
    color: ${({ theme }) => theme.colors.orange[60]};
  }

  &:hover {
    box-shadow: rgb(255 178 56 / 30%) 0px 4px 16px 0px;
  }

  &:not(:first-child) {
    margin-top: 50px;
  }
`

export const Text = styled.div`
  font-size: 1.2em;
  font-size: calc(10px + 0.33vw);

  p {
    margin-bottom: 14px;
  }
`
