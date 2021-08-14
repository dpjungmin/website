import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: clamp(100px, 20vw, 150px);
  line-height: 1;
`

export const Subtitle = styled.h2`
  font-size: clamp(30px, 5vw, 40px);
  font-weight: var(--font-weight-regular, 400);
`

export const HomeButton = styled(Link)`
  font-size: 16px;
  margin-top: 40px;
`
