import styled from 'styled-components'
import { cores } from '../../styles'
import { Botao } from '../Produto/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.8;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
`
export const CartCointainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${Botao} {
    background-color: ${cores.begeEscuro};
  }
`

export const CartItem = styled.li`
  background-color: ${cores.begeEscuro};
  display: flex;
  width: 100%;
  height: 100px;
  padding: 8px;
  box-sizing: border-box;
  position: relative;
  color: ${cores.vermelho};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 8px;
    cursor: pointer;
  }
`
export const Prices = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  color: ${cores.begeEscuro};
  span {
    font-size: 14px;
  }
`
