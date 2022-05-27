import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from 'shared/types/Book';
import CartItem from 'shared/types/Cart';

type CartState = {
  value: CartItem[];
};

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      const bookPayload = action.payload;
      const alreadyChosen = !!state.value.find(
        (book) => book.id === bookPayload.id
      );
      return alreadyChosen
        ? {
            value: state.value.map((book) =>
              book.id === bookPayload.id ? { ...book, qty: book.qty + 1 } : book
            ),
          }
        : { value: [...state.value, { ...bookPayload, qty: 1 }] };
    },
    removeFromCart: (state, action: PayloadAction<number>) => {},
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
