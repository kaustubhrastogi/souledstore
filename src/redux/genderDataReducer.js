import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: { genderItem: "" } };
const genderDataSlice = createSlice({
  name: "genderData",
  initialState,
  reducers: {
    getGender: (state, action) => {
      state.data = { genderItem: action.payload };
    },
  },
});

export default genderDataSlice;

export const { getGender } = genderDataSlice.actions;
