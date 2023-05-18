import * as S from './styles'

export type Props = {
  ativo?: boolean
  quantidade: number
  legenda: string
}

const FiltroCard = ({ ativo, quantidade, legenda }: Props) => (
  <>
    <S.Card ativo={ativo}>
      <S.Quantidade>{quantidade}</S.Quantidade>
      <S.Titulo>{legenda}</S.Titulo>
    </S.Card>
  </>
)

export default FiltroCard
