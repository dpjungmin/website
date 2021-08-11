import styled from "styled-components"

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
`
