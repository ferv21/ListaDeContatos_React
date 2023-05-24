import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
      telefone: '(92)99277-9859'
    },
    {
      id: 2,
      nome: 'Felipe Viana',
      email: 'felipeviana@gmail.com',
      telefone: '(92)9357-9852'
    },
    {
      id: 3,
      nome: 'João Paulo',
      email: 'joaopaulo@gmail.com',
      telefone: '(92)99347-9432'
    },
    {
      id: 4,
      nome: 'EBAC EATS',
      email: 'ebaceats@gmail.com',
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
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Contato já adicionado!')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
