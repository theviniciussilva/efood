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
  BotaoCarrinho
} from './styles'

import estrela from '../../assets/images/estrela.svg'
import { useEffect, useState } from 'react'
import { Produtos } from '../../pages/Home'
import Modal from '../Modal'

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

const mock = {
  titulo: 'Pizza Marguerita',
  descricao:
    'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
  porcao: 'Serve: de 2 a 3 pessoas',
  preco: 60
}

const Produto = ({
  nome,
  descricao,
  foto,
  layout,
  infos,
  nota
}: ProdutosItem) => {
  const [restaurante, setRestaurante] = useState<Produtos>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 200) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

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
          <Botao to={`/perfil/${restaurante?.id}`}>Saiba Mais</Botao>
        ) : (
          <BotaoCarrinho onClick={() => setModalEstaAberto(true)} to="#">
            Adicionar ao carrinho
          </BotaoCarrinho>
        )}
      </ProdutoContainer>
      <Modal
        descricao={mock.descricao}
        porcao={mock.porcao}
        preco={mock.preco}
        titulo={mock.titulo}
        visible={modalEstaAberto}
        onClose={() => setModalEstaAberto(false)}
      />
    </>
  )
}
export default Produto
