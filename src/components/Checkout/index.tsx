import { useDispatch, useSelector } from 'react-redux'
import { BotaoCarrinho } from '../Produto/styles'
import { CheckoutContainer, Input, Label, InputDiv } from '../../styles'
import {
  adress,
  checkout,
  open,
  payment,
  proof
} from '../../store/reducers/cart'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useGetEnderecoMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { formataPreco } from '../Modal'
import { getTotalPrice } from '../Cart'

const Checkout = () => {
  const dispatch = useDispatch()

  const { items, Adress, Payment, Proof } = useSelector(
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
      endereco: Yup.string().required('O campo é obrigatório'),
      cidade: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .required('O campo é obrigatório')
        .min(8, 'Digite pelo menos 8 digitos')
        .max(8, 'Digite pelo menos 8 digitos'),
      numero: Yup.string().required('O campo é obrigatório'),
      complemento: Yup.string().notRequired(),
      cardOwner: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string()
        .required('O campo é obrigatório')
        .min(3, 'Digite pelo menos 3 digitos')
        .max(3, 'Digite pelo menos 3 digitos'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
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
    dispatch(adress())
    dispatch(payment())
  }

  const goToProof = () => {
    dispatch(payment())
    dispatch(proof())
  }

  const goToAdress = () => {
    dispatch(adress())
    dispatch(payment())
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }
  return (
    <>
      {Adress && (
        <CheckoutContainer>
          <h3>Entrega</h3>
          <form onSubmit={form.handleSubmit}>
            <Label htmlFor="nome">Quem irá receber</Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.nome}
              className={checkInputHasError('nome') ? 'error' : ''}
              title={form.errors.nome}
            />

            <Label htmlFor="endereco">Endereço</Label>
            <Input
              id="endereco"
              name="endereco"
              type="text"
              value={form.values.endereco}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('endereco') ? 'error' : ''}
              title={form.errors.endereco}
            />
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              name="cidade"
              type="text"
              value={form.values.cidade}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              className={checkInputHasError('cidade') ? 'error' : ''}
              title={form.errors.cidade}
            />

            <InputDiv gap="secondary">
              <div>
                <Label htmlFor="cep">CEP</Label>
                <Input
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
                <Label htmlFor="numero">Número</Label>
                <Input
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
            </InputDiv>

            <Label htmlFor="complemento">Complemento(opicional)</Label>
            <Input
              marginbottom="16px;"
              id="complemento"
              name="complemento"
              type="text"
              value={form.values.complemento}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </form>
          <BotaoCarrinho to="#" type="submit" onClick={goToPayment}>
            Continuar com o pagamento
          </BotaoCarrinho>
          <BotaoCarrinho to="#" onClick={goToCart}>
            Voltar para o carrinho
          </BotaoCarrinho>
        </CheckoutContainer>
      )}
      {Payment && (
        <CheckoutContainer>
          <h3>
            Pagamento
            <span> - Valor a pagar {formataPreco(getTotalPrice(items))}</span>
          </h3>
          <form onSubmit={form.handleSubmit}>
            <Label htmlFor="cardOwner">Nome no cartão</Label>
            <Input
              id="cardOwner"
              name="cardOwner"
              type="text"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              value={form.values.cardOwner}
              className={checkInputHasError('cardOwner') ? 'error' : ''}
              title={form.errors.cardOwner}
            />

            <InputDiv gap="primary">
              <div>
                <Label htmlFor="cardNumber">Número do cartão</Label>
                <Input
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
                <Label htmlFor="cardCode">CVV</Label>
                <Input
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
            </InputDiv>

            <InputDiv gap="secondary">
              <div>
                <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                <Input
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
                <Label htmlFor="expiresYear">Ano de vencimento</Label>
                <Input
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
            </InputDiv>
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
          <BotaoCarrinho onClick={goToAdress} to="#">
            Voltar para a edição de endereço
          </BotaoCarrinho>
        </CheckoutContainer>
      )}
      {Proof && data && isSuccess && (
        <CheckoutContainer>
          <h3>
            Pedido relizado <span>{data.orderId}</span>
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
        </CheckoutContainer>
      )}
    </>
  )
}

export default Checkout
