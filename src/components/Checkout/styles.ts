import styled from 'styled-components'
import { cores } from '../../styles'
import InputMask from 'react-input-mask'

type InputGap = {
  gap?: 'primary' | 'secondary'
}
type Input = {
  maxwidth?: string
  marginbottom?: string
}

export const Label = styled.label`
  display: block;
  line-height: 16px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
`
export const Input = styled(InputMask)<Input>`
  width: 100%;
  max-width: ${(props) => props.maxwidth || 'auto'};
  margin-bottom: ${(props) => props.marginbottom || '8px'};
  height: 32px;

  &.error {
    border: 2px solid red;
  }
`

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
