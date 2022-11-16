import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../services";

export type CategoryType = {
  name: string;
};

type InitialVideoState = {
  categoryList: CategoryType[];
  isLoading: boolean;
  isError: boolean;
};

const initialState: InitialVideoState = {
  categoryList: [],
  isLoading: false,
  isError: false,
};

const fetchQuotes = createAsyncThunk("quote/fetchQuotes", async () => {
  try {
    const URL = "Categories";
    const response = await API.getAllCategories(URL);
    return response;
  } catch (err) {
    return err;
  }
});

const quotesSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.categoryList = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchQuotes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuotes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const quoteReducer = quotesSlice.reducer;
export { fetchQuotes };
