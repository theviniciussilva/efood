import {
  Descricao,
  ProdutoContainer,
  Titulo,
  Botao,
  Infos,
  TagContainer,
  Imagem,
  Nota,
  NotaContainer
} from './styles'

import estrela from '../../assets/images/estrela.svg'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  receita: 'pizza' | 'frutosMar'
  infos: string[]
}

const Produto = ({ titulo, descricao, imagem, receita, infos }: Props) => {
  return (
    <ProdutoContainer receita={receita}>
      <Imagem src={imagem} />
      <Infos>
        {infos.map((info) => (
          <TagContainer key={info}>{info}</TagContainer>
        ))}
      </Infos>
      <NotaContainer>
        <Titulo receita={receita}>{titulo}</Titulo>
        {receita === 'frutosMar' && (
          <Nota>
            4.9
            <img src={estrela} />
          </Nota>
        )}
      </NotaContainer>
      <Descricao receita={receita}>{descricao}</Descricao>
      {receita === 'frutosMar' ? (
        <Botao receita={receita}>Saiba Mais</Botao>
      ) : (
        <Botao receita={receita}>Adicionar ao carrinho</Botao>
      )}
    </ProdutoContainer>
  )
}

export default Produto
