import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const CardapioGrid = styled.div<Omit<Props, 'produtos'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.receita === 'pizza' ? '1fr 1fr 1fr' : '1fr 1fr'};
  gap: ${(props) => (props.receita === 'pizza' ? '32px' : '80px')};
`

export const CardapioContainer = styled.section`
  padding-top: 56px;
  padding-bottom: 120px;
  background-color: ${cores.bege};
`
