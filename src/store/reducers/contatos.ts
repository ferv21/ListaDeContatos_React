import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'
import Contato from '../../models/Contato'
export const contatoSlice = createSlice({
  name: 'contato',
  initialState: [
    new Contato(
      1,
      'Fernando Viana',
      'fernandoviana@gmail.com',
      enums.ContatoTipo.FAMILIA,
      '(92)99277-9859'
    ),
    new Contato(
      2,
      'Felipe Viana',
      'felipeviana@gmail.com',
      enums.ContatoTipo.AMIGOS,
      '(92)99277-9232'
    ),
    new Contato(
      3,
      'Gabriel Silva',
      'GabrielSilva@gmail.com',
      enums.ContatoTipo.TRABALHO,
      '(92)99324-9149'
    ),
    new Contato(
      4,
      'Ebac Eats',
      'Ebaceats@gmail.com',
      enums.ContatoTipo.SERVICOS,
      '(92)3212-9149'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
