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
      <NotaContainer>
        <Titulo receita={receita}>{titulo}</Titulo>
        {receita === 'frutosMar' && (
          <>
            <Infos>
              {infos.map((info) => (
                <TagContainer key={info}>{info}</TagContainer>
              ))}
            </Infos>
            <Nota>
              4.9
              <img src={estrela} />
            </Nota>
          </>
        )}
      </NotaContainer>
      <Descricao receita={receita}>{descricao}</Descricao>
      {receita === 'frutosMar' ? (
        <Botao to="/perfil">Saiba Mais</Botao>
      ) : (
        <BotaoCarrinho to="#">Adicionar ao carrinho</BotaoCarrinho>
      )}
    </ProdutoContainer>
  )
}

export default Produto
