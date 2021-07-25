import { Link } from 'gatsby'
import styled from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`

export const Subtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: var(--font-weight-regular, 400);
`

export const HomeButton = styled(Link)`
  margin-top: 40px;
`
