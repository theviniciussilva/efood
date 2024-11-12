import { Produtos } from '../../pages/Home/index'
import { CardapioContainer, CardapioGrid } from './styles'
import Produto from '../Produto'

export type Props = {
  restaurantes?: Produtos[]
  layout: 'primary' | 'secondary'
}

const Cardapio = ({ restaurantes, layout }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getProdutosTags = (restaurante: Produtos) => {
    const tags = []
    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }
    return tags
  }

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <CardapioContainer>
        <CardapioGrid layout={layout} className="container">
          {restaurantes.map((restaurante) => (
            <div key={restaurante.id}>
              {/* Se layout for 'primary', exibe os detalhes do restaurante */}
              {layout === 'primary' && (
                <Produto
                  nota={restaurante.avaliacao}
                  infos={getProdutosTags(restaurante)}
                  layout={layout}
                  descricao={restaurante.descricao}
                  foto={restaurante.capa}
                  nome={restaurante.titulo}
                  id={restaurante.id}
                />
              )}
              {/* Exibe todos os itens do cardápio do restaurante */}
              {layout === 'secondary' &&
                restaurante.cardapio.map((comida) => (
                  <Produto
                    key={comida.id}
                    infos={['']}
                    layout={layout}
                    descricao={comida.descricao}
                    foto={comida.foto}
                    nome={comida.nome}
                    id={comida.id}
                    preco={comida.preco}
                  />
                ))}
            </div>
          ))}
        </CardapioGrid>
      </CardapioContainer>
    </>
  )
}

export default Cardapio
