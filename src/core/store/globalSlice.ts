import dogCeoApi from "@core/api/dogCeoApi";
import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

interface State {
  breeds: string[];
  selectedBreed: string;
  images: Record<string, string[]>;
  errors: SerializedError[];
  fetchAllStatus: "idle" | "loading" | "succeeded" | "failed";
  fetchImagesStatus: "idle" | "loading" | "succeeded" | "failed";
}

const fetchAllDogs = createAsyncThunk(
  "fetchAllDogs",
  async () => {
    return dogCeoApi.fetchAll();
  },
  {
    condition: (_, { getState }) =>
      (getState() as RootState).global.fetchAllStatus !== "loading",
  }
);

const fetchImagesByBreed = createAsyncThunk(
  "fetchImagesByBreed",
  async (breed: string) => {
    return dogCeoApi.fetchImagesByBreed(breed);
  },
  {
    condition: (breed, { getState }) => {
      const breedImages = (getState() as RootState).global.images[breed];
      return !breedImages || breedImages.length === 0;
    },
  }
);

const initialState: State = {
  breeds: [],
  images: {},
  errors: [],
  selectedBreed: "",
  fetchAllStatus: "idle",
  fetchImagesStatus: "idle",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSelectedBreed: (state: State, action: PayloadAction<string>) => {
      return { ...state, selectedBreed: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllDogs.pending, (state) => {
      state.fetchAllStatus = "loading";
    });
    builder.addCase(fetchAllDogs.fulfilled, (state, action) => {
      state.breeds = Object.keys(action.payload.message);
      state.fetchAllStatus = "succeeded";
    });
    builder.addCase(fetchAllDogs.rejected, (state, action) => {
      state.errors.push(action.error);
      state.fetchAllStatus = "failed";
    });

    builder.addCase(fetchImagesByBreed.pending, (state) => {
      state.fetchImagesStatus = "loading";
    });
    builder.addCase(fetchImagesByBreed.fulfilled, (state, action) => {
      state.images[action.meta.arg] = action.payload.message;
      state.fetchImagesStatus = "succeeded";
    });
    builder.addCase(fetchImagesByBreed.rejected, (state) => {
      state.fetchImagesStatus = "failed";
    });
  },
});

export { fetchAllDogs, fetchImagesByBreed };
export const { setSelectedBreed } = globalSlice.actions;
export default globalSlice.reducer;
