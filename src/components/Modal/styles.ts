import styled from 'styled-components'
import { BotaoCarrinho } from '../Produto/styles'
import { cores } from '../../styles'

export const Modal = styled.div`
  z-index: 1;
  &.visible {
    display: flex;
  }

  display: none;
  justify-content: center;
  align-items: center;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .container {
    width: 1024px;
    background-color: ${cores.vermelho};
    height: 344px;
    padding: 32px;
    position: relative;
  }
`

export const ImageContainer = styled.div`
  img {
    display: block;
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
`
export const ModalContent = styled.div`
  position: relative;
  max-width: 1024px;
  z-index: 1;

  > img {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    cursor: pointer;
  }

  header {
    display: flex;
    justify-content: flex-end;
  }

  main {
    display: flex;
    color: ${cores.branco};

      h4 {
        margin-left: 24px;
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 900;
        line-height: 22px;
      }
      p {
        margin-left: 24px;
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
      }
      ${BotaoCarrinho} {
        margin-left: 24px;
        display: inline-block;
      }
    }
  }
`
