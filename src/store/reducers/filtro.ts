import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'

type FiltroState = {
  termo: string
  valor?: enums.ContatoTipo
}

const initialState: FiltroState = {
  termo: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filtroSlice.actions
export default filtroSlice.reducer
