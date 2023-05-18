import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  height: 100vh;
  padding: 16px;
  background-color: ${variaveis.cinza};
`

export const Filtros = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`
export const BarraPesquisa = styled.input`
  padding: 8px;
  font-size: 16px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinza};
  border-color: ${variaveis.cinza};
  width: 100%;
`
