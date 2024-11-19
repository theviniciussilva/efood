import { BotaoCarrinho } from '../Produto/styles'
import fechar from '../../assets/images/fechar.png'
import { ImageContainer, ModalContent, Modal as ModalMain } from './styles'

type Props = {
  visible?: boolean
  onClose?: () => void
  foto: string
  preco: number | undefined
  nome: string
  descricao: string
  porcao: string | undefined
}

const Modal = ({
  visible,
  onClose,
  foto,
  nome,
  descricao,
  porcao,
  preco
}: Props) => {
  if (!visible) return null
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  if (!preco) {
    return <h3>Carregando</h3>
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
              <BotaoCarrinho to="#">
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
