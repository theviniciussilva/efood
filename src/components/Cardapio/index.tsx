import Produto from '../Produto'

import { Restaurantes } from '../../pages/Home/index'
import { CardapioContainer, CardapioGrid } from './styles'

export type Props = {
  restaurantes?: Restaurantes[]
  comidas?: Restaurantes
  layout: 'primary' | 'secondary'
}

const Cardapio = ({ restaurantes, layout, comidas }: Props) => {
  const getProdutosTags = (restaurante: Restaurantes) => {
    const tags = []
    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }
    return tags
  }

  return (
    <>
      <CardapioContainer>
        <CardapioGrid layout={layout} className="container">
          {layout === 'primary' &&
            restaurantes?.map((restaurante) => (
              <Produto
                prato={undefined}
                preco={0}
                porcao={''}
                key={restaurante.id}
                nota={restaurante.avaliacao}
                infos={getProdutosTags(restaurante)}
                layout={layout}
                descricao={restaurante.descricao}
                foto={restaurante.capa}
                nome={restaurante.titulo}
                id={restaurante.id}
              />
            ))}
          {layout === 'secondary' &&
            comidas?.cardapio.map((prato) => (
              <Produto
                key={prato.id}
                infos={['']}
                layout={layout}
                descricao={prato.descricao}
                foto={prato.foto}
                nome={prato.nome}
                id={prato.id}
                preco={prato.preco}
                porcao={prato.porcao}
                prato={prato}
              />
            ))}
        </CardapioGrid>
      </CardapioContainer>
    </>
  )
}

export default Cardapio
