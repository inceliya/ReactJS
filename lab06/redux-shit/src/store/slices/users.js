import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('user/fetchUsers', () =>
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
)

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    addUsers: (state, action) => {
      console.log(action.payload)
      state.list.push(...action.payload)
    },
    removeUser: (state, action) => {
      state.list = state.list.filter(user => user.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list.push(...action.payload)
    })
  },
});

export const { addUsers, removeUser } = usersSlice.actions;
export default usersSlice.reducer;