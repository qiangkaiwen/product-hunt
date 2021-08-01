import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from './productAPI';

const initialState = {
  isLoading: false,
  products: [],
};

export const fetchProductAsync = createAsyncThunk(
  'product/fetchProduct',
  async (value) => {
    const response = await fetchProduct();
    if (value === '' || value === null || value === undefined)
      return response.data.posts;
    else
      return response.data.posts.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()) || product.tagline.toLowerCase().includes(value.toLowerCase()));
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.isLoading = true;
        state.products = [];
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      });
  },
});

export const { getProducts, filterProducts, setLoadingStatus } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectIsLoading = (state) => state.product.isLoading;

export default productSlice.reducer;
