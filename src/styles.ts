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

export default EstiloGlobal
