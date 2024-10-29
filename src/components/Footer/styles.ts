import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  background-color: ${cores.begeEscuro};

  img {
    margin-bottom: 32px;
  }
`
export const Social = styled.ul`
  display: flex;
  justify-content: center;

  a {
    margin-right: 8px;
  }
`

export const FooterDescricao = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: ${cores.vermelho};
`
