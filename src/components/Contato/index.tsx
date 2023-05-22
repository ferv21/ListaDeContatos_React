import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/contatos'
import * as S from './styles'

import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, tipoContato, id }: Props) => {
  const dispatch = useDispatch()

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
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.CardContato>
    </>
  )
}

export default Contato
