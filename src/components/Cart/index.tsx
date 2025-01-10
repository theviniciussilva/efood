import { BotaoCarrinho } from '../Produto/styles'
import { CartCointainer, Overlay, SideBar, CartItem, Prices } from './styles'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { adress, checkout, close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Modal'
import { Cardapio } from '../../pages/Home'
import CheckoutPage from '../Checkout'

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
        <CartCointainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <SideBar>
            <h3>Por favor insira um item no carrinho para prosseguir</h3>
          </SideBar>
        </CartCointainer>
      )}
      {items.length > 0 && (
        <CartCointainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <SideBar>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
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
                </CartItem>
              ))}
            </ul>
            <Prices>
              <span>Valor total</span>
              <span>{formataPreco(getTotalPrice(items))}</span>
            </Prices>
            <BotaoCarrinho
              onClick={() => {
                closeCart()
                goToCheckout()
              }}
              to="#"
            >
              Continuar com a entrega
            </BotaoCarrinho>
          </SideBar>
        </CartCointainer>
      )}

      {Checkout && (
        <CartCointainer className={Checkout ? 'is-open' : ''}>
          <Overlay />
          <SideBar>
            <CheckoutPage />
          </SideBar>
        </CartCointainer>
      )}
    </>
  )
}

export default Cart
