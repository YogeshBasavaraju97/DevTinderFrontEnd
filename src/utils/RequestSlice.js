import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequest: (state, action) => action.payload,
    removerRequest: (state, action) => {

      return state.filter((r) => (

        r._id != action.payload

      ));

    }
  }
});

export const { addRequest, removerRequest } = requestSlice.actions;

export default requestSlice.reducer;