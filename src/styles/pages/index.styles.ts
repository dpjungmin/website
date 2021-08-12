import styled from "styled-components"

export const Container = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
`
