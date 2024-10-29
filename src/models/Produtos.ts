class Produtos {
  id: number
  titulo: string
  descricao: string
  imagem: string
  infos: string[]

  constructor(
    infos: string[],
    id: number,
    titulo: string,
    descricao: string,
    imagem: string
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.imagem = imagem
    this.infos = infos
  }
}

export default Produtos
