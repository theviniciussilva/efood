import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '../Cardapio'

export const ProdutoContainer = styled.div<Omit<Props, 'produtos'>>`
  background-color: ${(props) =>
    props.receita === 'pizza' ? cores.vermelho : cores.branco};
  display: block;
  color: ${(props) =>
    props.receita === 'pizza' ? cores.begeEscuro : cores.vermelho};
  padding: ${(props) => (props.receita === 'pizza' ? '8px' : '0px;')};
  position: relative;
  border: ${(props) =>
    props.receita === 'pizza' ? 'none' : `solid 1px ${cores.vermelho}`};
`
export const Titulo = styled.h3<Omit<Props, 'produtos'>>`
  font-weight: 900;
  font-size: ${(props) => (props.receita === 'pizza' ? '16px' : '18px')};
  line-height: 18px;
  margin-left: ${(props) => (props.receita === 'pizza' ? '0px' : '8px')};
`
export const Descricao = styled.p<Omit<Props, 'produtos'>>`
  margin-top: ${(props) => (props.receita === 'pizza' ? '8px' : '16px')};
  margin-left: ${(props) => (props.receita === 'pizza' ? '0px' : '8px')};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`
export const Imagem = styled.img`
  width: 100%;
`

export const Botao = styled.button<Omit<Props, 'produtos'>>`
  color: ${(props) =>
    props.receita === 'pizza' ? cores.vermelho : cores.branco};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  background-color: ${(props) =>
    props.receita === 'pizza' ? cores.begeEscuro : cores.vermelho};
  border: none;
  width: ${(props) => (props.receita === 'pizza' ? '304px  ' : '82px')};
  height: 24px;
  display: inline-block;
  margin: ${(props) =>
    props.receita === 'frutosMar' ? '16px 0px 8px 8px' : '0px'};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
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
