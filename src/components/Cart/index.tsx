import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { BotaoCarrinho } from '../Produto/styles'

import CheckoutPage from '../Checkout'

import { Cardapio } from '../../pages/Home'
import { RootReducer } from '../../store'
import { adress, checkout, close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco)
  }, 0)
}

const Cart = () => {
  const { isOpen, items, Checkout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    dispatch(adress())
    dispatch(checkout())
  }

  return (
    <>
      {items.length === 0 && (
        <S.CartCointainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.SideBar>
            <h3>Por favor insira um item no carrinho para prosseguir</h3>
          </S.SideBar>
        </S.CartCointainer>
      )}
      {items.length > 0 && (
        <S.CartCointainer className={isOpen ? 'is-open' : ''}>
          <S.Overlay onClick={closeCart} />
          <S.SideBar>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <div>
                    <img src={item.foto} />
                  </div>
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                    <button
                      onClick={() => {
                        removeItem(item.id)
                      }}
                      type="button"
                    />
                  </div>
                </S.CartItem>
              ))}
            </ul>
            <S.Prices>
              <span>Valor total</span>
              <span>{formataPreco(getTotalPrice(items))}</span>
            </S.Prices>
            <BotaoCarrinho
              onClick={() => {
                closeCart()
                goToCheckout()
              }}
              to="#"
            >
              Continuar com a entrega
            </BotaoCarrinho>
          </S.SideBar>
        </S.CartCointainer>
      )}

      {Checkout && (
        <S.CartCointainer className={Checkout ? 'is-open' : ''}>
          <S.Overlay />
          <S.SideBar>
            <CheckoutPage />
          </S.SideBar>
        </S.CartCointainer>
      )}
    </>
  )
}

export default Cart
