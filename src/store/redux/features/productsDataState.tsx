import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  closet_url: string;
  clothing_type: number;
  description: string;
  designer_name: string;
  gender: number;
  id: number;
  image_url: string | null;
  is_closet: number;
  screenshot_url: string | null;
}

interface ProductsState {
  data: Product[];
  product: Product | null;
}

const initialState: ProductsState = {
  data: [],
  product: null,
};

const productsDataSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<Product[]>) => {
      state.data.push(...action.payload);
    },
    setProduct: (state, action: PayloadAction<Product | null>) => {
      state.product = action.payload;
    },
  },
});

export const { addData, setProduct } = productsDataSlice.actions;

export default productsDataSlice.reducer;
