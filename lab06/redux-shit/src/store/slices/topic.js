import {createSlice} from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topic",
  initialState: {
    value: 'Redux Toolkit',
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
  },
});

export const {setValue} = topicSlice.actions;
export default topicSlice.reducer;