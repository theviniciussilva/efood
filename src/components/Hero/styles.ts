import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  position: relative;
  z-index: -2;
  color: ${cores.branco};
  font-size: 32px;
  line-height: 38px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`

export const Descricao = styled.p`
  font-weight: 100;
  position: absolute;
  top: 25px;
`
export const Titulo = styled.h2`
  font-weight: 900;
  position: absolute;
  bottom: 32px;
`
