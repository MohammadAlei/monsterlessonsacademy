const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  username: "",
  search: "",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return ["Jack", "John"];
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state) {
      state.users.push(state.username);
      state.username = "";
    },
    changeUsername(state, action) {
      state.username = action.payload;
    },
    changeSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {});
  },
});

export const { addUser, changeSearch, changeUsername } = usersSlice.actions;
export default usersSlice.reducer;