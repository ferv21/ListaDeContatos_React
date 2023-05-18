import styled from 'styled-components'
import { Props } from '.'
import variaveis from '../../styles/variaveis'

type PropsAtivo = Omit<Props, 'quantidade' | 'legenda'>

export const Card = styled.div<PropsAtivo>`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.azul : variaveis.azulescuro)};
  background-color: white;
  color: ${(props) => (props.ativo ? variaveis.azul : variaveis.azulescuro)};
`
export const Quantidade = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Titulo = styled.span`
  font-size: 14px;
`
