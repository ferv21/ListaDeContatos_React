import styled from 'styled-components'
import * as enums from '../../utils/enums/contato'
import variaveis from '../../styles/variaveis'

type TagProps = {
  tipoContato: enums.ContatoTipo
}

function corTag(props: TagProps) {
  if (props.tipoContato === enums.ContatoTipo.AMIGOS) return variaveis.azul
  if (props.tipoContato === enums.ContatoTipo.FAMILIA) return variaveis.verde
  if (props.tipoContato === enums.ContatoTipo.TRABALHO) return variaveis.amarelo
  if (props.tipoContato === enums.ContatoTipo.SERVICOS) return variaveis.laranja
}

export const CardContato = styled.div`
  background-color: ${variaveis.cinzaClaro};
  padding: 16px;
  border-radius: 16px;
  font-size: 18px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const NomeContato = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  &:focus {
    outline: none;
    border: none;
  }
`
export const EmailContato = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  &:focus {
    outline: none;
    border: none;
  }
`
export const NumeroContato = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  &:focus {
    outline: none;
    border: none;
  }
`
export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px;
  border-radius: 8px;
  font-size: 12px;
  color: #fff;
  background-color: ${(props) => corTag(props)};
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulescuro};
  border-radius: 16px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
