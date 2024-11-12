import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const CardapioGrid = styled.div<Omit<Props, 'restaurantes'>>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.layout === 'secondary' ? '1fr 1fr 1fr' : '1fr 1fr'};
  gap: ${(props) => (props.layout === 'secondary' ? '32px' : '80px')};
`

export const CardapioContainer = styled.section`
  padding-top: 56px;
  padding-bottom: 120px;
  background-color: ${cores.bege};
`
