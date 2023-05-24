import styled from 'styled-components'

export const ListaContainer = styled.div`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  @media (max-width: 820px) {
    h1 {
      padding-top: 20px;
      text-align: center;
    }
  }
`
export const Form = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  form {
    @media (max-width: 820px) {
      display: flex;
      flex-direction: column;
    }
    input {
      font-size: 16px;
      border-radius: 8px;
      height: 40px;
      width: 300px;
      margin: 0 20px;
      padding: 8px;
      @media (max-width: 820px) {
        margin: 16px 0;
      }
    }
  }
`

export const BotaoAdd = styled.button`
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
`
