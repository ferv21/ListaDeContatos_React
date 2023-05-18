import * as enums from '../utils/enums/contato'

class Contato {
  id: number
  nome: string
  email: string
  tipoContato: enums.ContatoTipo
  telefone: string
  constructor(
    id: number,
    nome: string,
    email: string,
    tipoContato: enums.ContatoTipo,
    telefone: string
  ) {
    this.id = id
    this.nome = nome
    this.email = email
    this.tipoContato = tipoContato
    this.telefone = telefone
  }
}

export default Contato
