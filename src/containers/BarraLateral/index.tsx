import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
const BarraLateral = () => (
  <>
    <S.Aside>
      <S.BarraPesquisa type="text" placeholder="Procurar" />
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

export default BarraLateral
