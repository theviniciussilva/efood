import { BotaoCarrinho } from '../Produto/styles'
import fechar from '../../assets/images/fechar.png'
import { ImageContainer, ModalContent, Modal as ModalMain } from './styles'

type Props = {
  titulo: string
  descricao: string
  porcao: string
  preco: number
  visible?: boolean
  onClose: () => void
}

const Modal = ({
  descricao,
  porcao,
  preco,
  titulo,
  visible,
  onClose
}: Props) => {
  if (!visible) return null

  return (
    <>
      <ModalMain className={visible ? 'visible' : ''}>
        <ModalContent className="container">
          <img onClick={onClose} src={fechar} alt="Fechar modal" />
          <main>
            <ImageContainer>
              <img src="" alt={titulo} />
            </ImageContainer>
            <div>
              <h4>{titulo}</h4>
              <p>{descricao}</p>
              <br />
              <p>{porcao}</p>
              <BotaoCarrinho to="#">
                Adicionar ao carrinho - R$ {preco}
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
