import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'

type Props = {
  nome: string
  email: string
  tipoContato: enums.ContatoTipo
  telefone: string
}

const Contato = ({ nome, email, telefone, tipoContato }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <>
      <S.CardContato>
        <S.NomeContato>{nome}</S.NomeContato>
        <S.Tag tipoContato={tipoContato}>{tipoContato}</S.Tag>
        <S.EmailContato>{email}</S.EmailContato>
        <S.NumeroContato>{telefone}</S.NumeroContato>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.CardContato>
    </>
  )
}

export default Contato
