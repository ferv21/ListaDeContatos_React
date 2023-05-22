import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/Contato'
import { ListaContainer } from './styles'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos) //aqui podemos retorar algo do nosso state, que são os reducers do rootreducer

  return (
    <>
      <ListaContainer>
        <input type="text" />
        <input type="email" />
        <input type="tel" />

        <h1>Família</h1>
        <ul>
          {itens.map((contato) => (
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
