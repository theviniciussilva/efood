import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  Adress: boolean
  Payment: boolean
  Checkout: boolean
  Proof: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  Checkout: false,
  Adress: false,
  Payment: false,
  Proof: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    checkout: (state) => {
      state.Checkout = !state.Checkout
    },
    adress: (state) => {
      state.Adress = !state.Adress
    },
    payment: (state) => {
      state.Payment = !state.Payment
    },
    proof: (state) => {
      state.Proof = !state.Proof
    }
  }
})

export const { add, close, open, remove, adress, payment, checkout, proof } =
  cartSlice.actions
export default cartSlice.reducer
