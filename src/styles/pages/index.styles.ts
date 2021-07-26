import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  min-height: 100vh;
`
