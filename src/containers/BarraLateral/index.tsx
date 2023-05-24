import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <S.Aside>
        <S.BarraPesquisa
          type="text"
          placeholder="Procurar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="Serviços" quantidade={8} />
          <FiltroCard legenda="Amigos" quantidade={19} />
          <FiltroCard legenda="Família" quantidade={5} />
          <FiltroCard legenda="Trabalho" quantidade={8} />
          <FiltroCard ativo legenda="Todos" quantidade={40} />
        </S.Filtros>
      </S.Aside>
    </>
  )
}

export default BarraLateral
