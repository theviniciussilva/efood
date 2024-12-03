import { BotaoCarrinho } from '../Produto/styles'
import fechar from '../../assets/images/fechar.png'
import { ImageContainer, ModalContent, Modal as ModalMain } from './styles'
import { useDispatch } from 'react-redux'
import { Cardapio } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

type Props = {
  prato: Cardapio | undefined
  visible?: boolean
  onClose?: () => void
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}
export const formataPreco = (preco: number) => {
  if (preco) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
}

const Modal = ({
  visible,
  onClose,
  foto,
  nome,
  descricao,
  porcao,
  preco,
  prato
}: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    if (prato) {
      dispatch(add(prato))
      dispatch(open())
    }
  }

  return (
    <>
      <ModalMain className={visible ? 'visible' : ''}>
        <ModalContent className="container">
          <img onClick={onClose} src={fechar} alt="Fechar modal" />
          <main>
            <ImageContainer>
              <img src={foto} />
            </ImageContainer>
            <div>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <br />
              <p>Serve: de {porcao}</p>
              <BotaoCarrinho onClick={addToCart} to="#">
                Adicionar ao carrinho - {formataPreco(preco)}
              </BotaoCarrinho>
            </div>
          </main>
        </ModalContent>
        <div onClick={onClose} className="overlay"></div>
      </ModalMain>
    </>
  )
}

export default Modal
