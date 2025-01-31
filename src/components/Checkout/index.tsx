import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { BotaoCarrinho } from '../Produto/styles'
import * as S from './styles'
import { adress, checkout, open, payment } from '../../store/reducers/cart'

import { RootReducer } from '../../store'
import { formataPreco } from '../../utils'
import { getTotalPrice } from '../Cart'
import { useGetEnderecoMutation } from '../../services/api'
import { useState } from 'react'

const Checkout = () => {
  const dispatch = useDispatch()

  const [paymentSchema, setPaymentSchema] = useState(false)
  const { items, Adress, Payment } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { isSuccess, data }] = useGetEnderecoMutation()

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(5, 'Precisa conter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      endereco: Yup.string().required(),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'Digite pelo menos 8 digitos')
        .max(9, 'Digite pelo menos 8 digitos')
        .required('O campo é obrigatório'),
      numero: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string().notRequired(),
      cardOwner: Yup.string().when((values, schema) =>
        paymentSchema
          ? schema
              .required('O campo é obrigatório')
              .min(5, 'Precisa conter pelo menos 5 caracteres')
          : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        paymentSchema ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        paymentSchema ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        paymentSchema ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        paymentSchema ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.nome,
          adress: {
            city: values.cidade,
            description: values.endereco,
            number: Number(values.numero),
            zipCode: values.cep,
            complement: values.complemento
          }
        },

        payment: {
          active: paymentSchema,
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const goToCart = () => {
    dispatch(adress())
    dispatch(checkout())
    dispatch(open())
  }

  const goToPayment = () => {
    Object.values(form.touched).forEach((touched) => {
      touched
      if (touched && form.isValid) {
        dispatch(payment())
        dispatch(adress())
        setPaymentSchema(true)
      }
    })
  }

  const goToProof = () => {
    const validation = form.values.cardOwner
    Object.values(form.touched).forEach((touched) => {
      touched
      if (touched && form.isValid && validation) {
        dispatch(payment())
      }
    })
  }

  function goToAdress() {
    dispatch(adress())
    dispatch(payment())
    setPaymentSchema(false)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  console.log(form)
  return (
    <>
      {data && isSuccess && !Adress && !Payment ? (
        <S.CheckoutContainer>
          <h3>
            Pedido realizado <span>{data.orderId}</span>
          </h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </S.CheckoutContainer>
      ) : Adress ? (
        <S.CheckoutContainer>
          <h3>Entrega</h3>
          <form onSubmit={form.handleSubmit}>
            <S.Label htmlFor="nome">Quem irá receber</S.Label>
            <S.Input
              mask=""
              id="nome"
              name="nome"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.nome}
              className={checkInputHasError('nome') ? 'error' : ''}
              title={form.errors.nome}
            />

            <S.Label htmlFor="endereco">Endereço</S.Label>
            <S.Input
              mask=""
              id="endereco"
              name="endereco"
              type="text"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('endereco') ? 'error' : ''}
              title={form.errors.endereco}
            />
            <S.Label htmlFor="cidade">Cidade</S.Label>
            <S.Input
              mask=""
              id="cidade"
              name="cidade"
              type="text"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cidade') ? 'error' : ''}
              title={form.errors.cidade}
            />

            <S.InputDiv gap="secondary">
              <div>
                <S.Label htmlFor="cep">CEP</S.Label>
                <S.Input
                  mask="99999-999"
                  maxwidth="155px"
                  id="cep"
                  name="cep"
                  type="text"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cep') ? 'error' : ''}
                  title={form.errors.cep}
                />
              </div>
              <div>
                <S.Label htmlFor="numero">Número</S.Label>
                <S.Input
                  mask=""
                  maxwidth="155px"
                  id="numero"
                  name="numero"
                  type="text"
                  value={form.values.numero}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('numero') ? 'error' : ''}
                  title={form.errors.numero}
                />
              </div>
            </S.InputDiv>

            <S.Label htmlFor="complemento">Complemento (opcional)</S.Label>
            <S.Input
              mask=""
              marginbottom="16px;"
              id="complemento"
              name="complemento"
              type="text"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </form>
          <BotaoCarrinho
            to="#"
            type="submit"
            onClick={() => {
              form.handleSubmit()
              goToPayment()
            }}
          >
            Continuar com o pagamento
          </BotaoCarrinho>
          <BotaoCarrinho to="#" onClick={goToCart}>
            Voltar para o carrinho
          </BotaoCarrinho>
        </S.CheckoutContainer>
      ) : Payment && isSuccess && !Adress ? (
        <S.CheckoutContainer>
          <h3>
            Pagamento
            <span> - Valor a pagar {formataPreco(getTotalPrice(items))}</span>
          </h3>
          <form onSubmit={form.handleSubmit}>
            <S.Label htmlFor="cardOwner">Nome no cartão</S.Label>
            <S.Input
              mask=""
              id="cardOwner"
              name="cardOwner"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardOwner}
              className={checkInputHasError('cardOwner') ? 'error' : ''}
              title={form.errors.cardOwner}
            />

            <S.InputDiv gap="primary">
              <div>
                <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                <S.Input
                  mask="9999 9999 9999 9999"
                  maxwidth="228px"
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardNumber}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  title={form.errors.cardNumber}
                />
              </div>
              <div>
                <S.Label htmlFor="cardCode">CVV</S.Label>
                <S.Input
                  mask="999"
                  id="cardCode"
                  name="cardCode"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardCode}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  title={form.errors.cardCode}
                />
              </div>
            </S.InputDiv>

            <S.InputDiv gap="secondary">
              <div>
                <S.Label htmlFor="expiresMonth">Mês de vencimento</S.Label>
                <S.Input
                  mask="99"
                  marginbottom="16px;"
                  id="expiresMonth"
                  name="expiresMonth"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.expiresMonth}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                  title={form.errors.expiresMonth}
                />
              </div>
              <div>
                <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
                <S.Input
                  mask="9999"
                  marginbottom="16px;"
                  id="expiresYear"
                  name="expiresYear"
                  type="text"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.expiresYear}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                  title={form.errors.expiresYear}
                />
              </div>
            </S.InputDiv>
          </form>
          <BotaoCarrinho
            onClick={() => {
              form.handleSubmit()
              goToProof()
            }}
            to="#"
          >
            Finalizar pagamento
          </BotaoCarrinho>
          <BotaoCarrinho
            onClick={() => {
              goToAdress()
              setPaymentSchema(false)
            }}
            to="#"
          >
            Voltar para a edição de endereço
          </BotaoCarrinho>
        </S.CheckoutContainer>
      ) : null}
    </>
  )
}

export default Checkout
