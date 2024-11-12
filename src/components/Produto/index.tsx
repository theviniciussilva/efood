import {
  Descricao,
  ProdutoContainer,
  Titulo,
  Botao,
  Infos,
  TagContainer,
  Imagem,
  Nota,
  NotaContainer,
  BotaoCarrinho,
  ModalContent,
  Modal,
  ImageContainer
} from './styles'
import fechar from '../../assets/images/fechar.png'

import estrela from '../../assets/images/estrela.svg'
import { useState } from 'react'
import { Produtos } from '../../pages/Home'

export interface ProdutosItem {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
  layout: 'primary' | 'secondary'
  infos: string[]
  nota?: number
  produtos?: Produtos
}

const Produto = ({
  produtos,
  preco,
  porcao,
  nome,
  descricao,
  foto,
  layout,
  infos,
  nota
}: ProdutosItem) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  return (
    <>
      <ProdutoContainer layout={layout}>
        <Imagem src={foto} />
        <NotaContainer>
          <Titulo layout={layout}>{nome}</Titulo>
          {layout === 'primary' && (
            <>
              <Infos>
                {infos.map((info) => (
                  <TagContainer key={info}>{info}</TagContainer>
                ))}
              </Infos>
              <Nota>
                {nota}
                <img src={estrela} />
              </Nota>
            </>
          )}
        </NotaContainer>
        <Descricao layout={layout}>{getDescricao(descricao)}</Descricao>
        {layout === 'primary' ? (
          <Botao to="/perfil/">Saiba Mais</Botao>
        ) : (
          <BotaoCarrinho onClick={() => setModalEstaAberto(true)} to="#">
            Adicionar ao carrinho
          </BotaoCarrinho>
        )}
      </ProdutoContainer>
      <Modal className={modalEstaAberto ? 'visible' : ''}>
        <ModalContent className="container">
          <img onClick={() => setModalEstaAberto(false)} src={fechar} />
          <main>
            <ImageContainer>
              <img src={modalUrl} />
            </ImageContainer>
            <div>
              <h4>Pizza Marguerita</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <br />
              <p>{porcao}</p>
              <BotaoCarrinho to="#">
                Adicionar ao carrinho - R$ {preco}
              </BotaoCarrinho>
            </div>
          </main>
        </ModalContent>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Produto
