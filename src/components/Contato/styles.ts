import styled from 'styled-components'

import variaveis from '../../styles/variaveis'

export const CardContato = styled.div`
  background-color: ${variaveis.cinzaClaro};
  padding: 16px;
  border-radius: 16px;
  font-size: 18px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      justify-content: center;
    }
  }
`

export const CampoContato = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  font-size: 24px;
  @media (max-width: 820px) {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border: none;
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 16px;
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
