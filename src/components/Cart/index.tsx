import { BotaoCarrinho } from '../Produto/styles'
import { CartCointainer, Overlay, SideBar, CartItem, Prices } from './styles'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
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
          <span>{formataPreco(getTotalPrice())}</span>
        </Prices>
        <BotaoCarrinho to="#">Continuar com a entrega</BotaoCarrinho>
      </SideBar>
    </CartCointainer>
  )
}

export default Cart
