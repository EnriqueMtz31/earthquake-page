import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: "" };

export const earthquakeSlice = createSlice({
  name: "selectedEarthquakeID",
  initialState,
  reducers: {
    setSelectedEarthquakeID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setSelectedEarthquakeID } = earthquakeSlice.actions;

export default earthquakeSlice.reducer;
