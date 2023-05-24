import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import { ListaContainer } from './styles'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos) //aqui podemos retorar algo do nosso state, que são os reducers do rootreducer
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContato = () => {
    return itens.filter((item) => item.nome.search(termo) >= 0)
  }

  return (
    <>
      <ListaContainer>
        <input type="text" />
        <input type="email" />
        <input type="tel" />

        <h1>{termo}</h1>
        <ul>
          {filtraContato().map((contato) => (
            <li key={contato.telefone}>
              <Contato
                id={contato.id}
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
}

export default ListaContatos
