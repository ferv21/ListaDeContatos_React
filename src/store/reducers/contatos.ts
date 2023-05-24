import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'
import Contato from '../../models/Contato'

type ContatosSlice = {
  itens: Contato[]
}

const initialState: ContatosSlice = {
  itens: [
    {
      id: 1,
      nome: 'Fernando Viana',
      email: 'fernandoviana@gmail.com',
      tipoContato: enums.ContatoTipo.FAMILIA,
      telefone: '(92)99277-9859'
    },
    {
      id: 2,
      nome: 'Felipe Viana',
      email: 'felipeviana@gmail.com',
      tipoContato: enums.ContatoTipo.AMIGOS,
      telefone: '(92)9357-9852'
    },
    {
      id: 3,
      nome: 'João Paulo',
      email: 'joaopaulo@gmail.com',
      tipoContato: enums.ContatoTipo.TRABALHO,
      telefone: '(92)99347-9432'
    },
    {
      id: 4,
      nome: 'EBAC EATS',
      email: 'ebaceats@gmail.com',
      tipoContato: enums.ContatoTipo.SERVICOS,
      telefone: '(92)3658-5263'
    }
  ]
}

export const contatoSlice = createSlice({
  name: 'contato',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
