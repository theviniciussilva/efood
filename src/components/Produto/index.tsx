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
import { useState } from 'react'
import Modal from '../Modal'
import { Cardapio } from '../../pages/Home'

type ProdutosItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  layout: 'primary' | 'secondary'
  infos: string[]
  nota?: number
  prato: Cardapio | undefined
}

const Produto = ({
  preco,
  nome,
  descricao,
  foto,
  layout,
  infos,
  nota,
  id,
  porcao,
  prato
}: ProdutosItem) => {
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
          <Botao to={`/perfil/${id}`}>Saiba Mais</Botao>
        ) : (
          <BotaoCarrinho
            onClick={() => {
              setModalEstaAberto(true)
            }}
            to="#"
          >
            Mais detalhes
          </BotaoCarrinho>
        )}
      </ProdutoContainer>
      <Modal
        preco={preco}
        descricao={descricao}
        foto={foto}
        nome={nome}
        porcao={porcao}
        visible={modalEstaAberto}
        prato={prato}
        onClose={() => setModalEstaAberto(false)}
      />
    </>
  )
}
export default Produto
