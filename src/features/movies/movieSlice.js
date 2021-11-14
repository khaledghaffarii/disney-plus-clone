import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newDisney: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.newDisney = action.payload.newDisney;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.newDisney;


export default movieSlice.reducer;
