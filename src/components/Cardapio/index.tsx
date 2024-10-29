import Produtos from '../../models/Produtos'
import pizza from '../../assets/images/pizza.png'
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import Produto from '../Produto'
import { CardapioContainer, CardapioGrid } from './styles'

export const pizzaMarguerita: Produtos[] = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza,
    infos: ['']
  },
  {
    id: 2,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza,
    infos: ['']
  },
  {
    id: 3,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza,
    infos: ['']
  },
  {
    id: 4,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza,
    infos: ['']
  },
  {
    id: 5,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza,
    infos: ['']
  },
  {
    id: 6,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza,
    infos: ['']
  }
]
export const frutosDoMar: Produtos[] = [
  {
    id: 7,
    titulo: 'Hioki Sushi',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: sushi,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 8,
    titulo: 'A La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: macarrao,
    infos: ['Italiana']
  },
  {
    id: 9,
    titulo: 'Pizza Marguerita',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: macarrao,
    infos: ['Italiana']
  },
  {
    id: 10,
    titulo: 'Pizza Marguerita',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: macarrao,
    infos: ['Italiana']
  },
  {
    id: 11,
    titulo: 'Pizza Marguerita',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: macarrao,
    infos: ['Italiana']
  },
  {
    id: 12,
    titulo: 'Pizza Marguerita',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: macarrao,
    infos: ['Italiana']
  }
]

export type Props = {
  produtos: Produtos[]
  receita: 'pizza' | 'frutosMar'
}

const Cardapio = ({ produtos, receita }: Props) => (
  <div>
    <CardapioContainer>
      <CardapioGrid receita={receita} className="container">
        {produtos.map((produto) => (
          <Produto
            infos={produto.infos}
            receita={receita}
            key={produto.id}
            descricao={produto.descricao}
            imagem={produto.imagem}
            titulo={produto.titulo}
          />
        ))}
      </CardapioGrid>
    </CardapioContainer>
  </div>
)

export default Cardapio
