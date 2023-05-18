import Contato from '../../components/Contato'
import { ListaContainer } from './styles'
import * as enums from '../../utils/enums/contato'

const contatos = [
  {
    nome: 'Fernando Viana',
    email: 'fernandoviana@gmail.com',
    tipoContato: enums.ContatoTipo.FAMILIA,
    telefone: '(92) 99277-9859'
  },
  {
    nome: 'Felipe Viana',
    email: 'felipeviana@gmail.com',
    tipoContato: enums.ContatoTipo.AMIGOS,
    telefone: '(92) 99277-9859'
  },
  {
    nome: 'Gabriel Silva',
    email: 'GabrielSilva@gmail.com',
    tipoContato: enums.ContatoTipo.TRABALHO,
    telefone: '(92) 99277-9859'
  },
  {
    nome: 'EBAC EATS',
    email: 'Ebaceats@gmail.com',
    tipoContato: enums.ContatoTipo.SERVICOS,
    telefone: '(92) 99277-9859'
  }
]

const ListaContatos = () => (
  <>
    <ListaContainer>
      <h1>Família</h1>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.telefone}>
            <Contato
              nome={contato.nome}
              email={contato.email}
              tipoContato={contato.tipoContato}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </ListaContainer>
  </>
)
export default ListaContatos
