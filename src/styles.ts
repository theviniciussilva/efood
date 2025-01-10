import styled, { createGlobalStyle } from 'styled-components'
import fundo from './assets/images/fundo.png'

export const cores = {
  vermelho: '#E66767',
  branco: '#fff',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9'
}

const EstiloGlobal = createGlobalStyle`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: Roboto;


  .container{
    margin: 0 auto;
    max-width: 1024px;
  }
}
`
export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
export const Imagem = styled.img`
  padding: 64px 0;
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type Input = {
  maxwidth?: string
  marginbottom?: string
}

export const CheckoutContainer = styled.div`
  padding-top 32px;
  color: ${cores.branco};
  h3 {
    margin-bottom: 16px;
    line-height: 700;
    font-size: 16px;
    line-height: 18px;
  }

  p{
    font-weight: 400;
    font-size: 14px;
    line-height:22px;
  }
`
export const Label = styled.label`
  display: block;
  line-height: 16px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
`
export const Input = styled.input<Input>`
  width: 100%;
  max-width: ${(props) => props.maxwidth || 'auto'};
  margin-bottom: ${(props) => props.marginbottom || '8px'};
  height: 32px;

  &.error {
    border: 2px solid red;
  }
`
type InputGap = {
  gap?: 'primary' | 'secondary'
}

export const InputDiv = styled.div<InputGap>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.gap === 'primary'
      ? '260px auto'
      : props.gap === 'secondary'
      ? 'auto auto'
      : ''};

  & > :first-child {
    margin-right: 32px;
  }
`

export default EstiloGlobal
