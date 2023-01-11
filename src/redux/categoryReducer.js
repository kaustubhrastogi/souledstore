import { createSlice } from "@reduxjs/toolkit";
import TryMock from "../Data/TryMock";

const initialState = { data: [{ categoryItem: "" }] };
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory: (state, action) => {
      state.data = { categoryItem: action.payload };
    },
    // getGender: (state, action) => {
    //   state.data = { genderItem: action.payload };
    // },
    // MenData : (state,action) => {
    //       state.filteredMen={filteredMen: action.payload}
    //   },
    // WomenData : (state,action) => {
    //       state.filteredWomen={filteredWomen: action.payload}
    //   },
    //   womenData : (state,action) => {
    //         state.data={filteredData: action.payload}
    //     },
  },
});

export default categorySlice;

export const { getCategory, getGender } = categorySlice.actions;
