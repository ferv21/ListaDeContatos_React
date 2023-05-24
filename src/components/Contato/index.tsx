import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import * as S from './styles'

import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeInicial,
  email,
  telefone,
  tipoContato,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')

  useEffect(() => {
    if (nomeInicial.length > 0) {
      setNome(nomeInicial)
    }
  }, [nomeInicial])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeInicial)
  }

  return (
    <>
      <S.CardContato>
        <S.NomeContato
          disabled={!estaEditando}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></S.NomeContato>
        <S.EmailContato value={email}></S.EmailContato>
        <S.NumeroContato value={telefone}></S.NumeroContato>
        <div>
          <S.Tag tipoContato={tipoContato}>{tipoContato}</S.Tag>{' '}
          {estaEditando ? (
            <>
              <S.BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      nome,
                      id,
                      email,
                      telefone,
                      tipoContato
                    })
                  )
                  {
                    setEstaEditando(false)
                  }
                }}
              >
                Salvar
              </S.BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>
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
        </div>
      </S.CardContato>
    </>
  )
}

export default Contato
