import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '../Cardapio'
import { Link } from 'react-router-dom'

export const ProdutoContainer = styled.div<Omit<Props, 'restaurantes'>>`
  background-color: ${(props) =>
    props.layout === 'primary' ? cores.branco : cores.vermelho};
  display: block;
  color: ${(props) =>
    props.layout === 'primary' ? cores.vermelho : cores.begeEscuro};
  padding: ${(props) => (props.layout === 'secondary' ? '8px' : '0px;')};
  position: relative;
  border: ${(props) =>
    props.layout === 'primary' ? `solid 1px ${cores.vermelho}` : 'none'};
`
export const Titulo = styled.h3<Omit<Props, 'restaurantes'>>`
  font-weight: 900;
  font-size: ${(props) => (props.layout === 'secondary' ? '16px' : '18px')};
  line-height: 18px;
  margin-left: ${(props) => (props.layout === 'secondary' ? '0px' : '8px')};
`
export const Descricao = styled.p<Omit<Props, 'restaurantes'>>`
  margin-top: ${(props) => (props.layout === 'secondary' ? '8px' : '16px')};
  margin-left: ${(props) => (props.layout === 'secondary' ? '0px' : '8px')};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
export const Imagem = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Botao = styled(Link)`
  color: ${cores.branco};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  background-color: ${cores.vermelho};
  border: none;
  display: inline-block;
  margin: 16px 0px 8px 8px;
  tex-decoration: none;
`

export const BotaoCarrinho = styled(Botao)`
  color: ${cores.vermelho};
  background-color: ${cores.begeEscuro};
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  margin-top: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 4px;
`
export const TagContainer = styled.div`
  background-color: ${cores.vermelho};
  margin-right: 8px;
  color: ${cores.begeEscuro};
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  padding: 6px 4px;
  display: inline-block;
`
export const Nota = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
    margin-right: 8px;
    height: 20px;
    width: 21px;
  }
`
export const NotaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`
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
