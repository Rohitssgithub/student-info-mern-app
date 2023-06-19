import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create action
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
  console.log("data", data);
  const response = await fetch(
    "http://localhost:9600/user/add",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  try {
    const result = await response.json();
    return result.users;
  } catch (error) {
    return rejectWithValue(error);
  }
}
);

//read action
export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {
  const response = await fetch("http://localhost:9600/users/get");
  try {
    const result = await response.json();
    return result.users;
  } catch (error) {
    return rejectWithValue(error);
  }
}
);
//delete action
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
  console.log(id)
  const response = await fetch(
    `http://localhost:9600/user/delete/${id}`,
    { method: "DELETE" }
  );

  try {
    const result = await response.json();
    console.log(result.users);
    return result.users;
  } catch (error) {
    return rejectWithValue(error);
  }
}
);

//update action
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
  console.log("updated data", data);
  const response = await fetch(
    `http://localhost:9600/user/edit/${data._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  // try {
  //   const result = await response.json();
  //   console.log(result.data)
  //   return result.data;
  // } catch (error) {
  //   return rejectWithValue(error);
  // }
  console.log(data)
  return data
}
);
export const singleUser = createAsyncThunk("singleUser", async (id, { rejectWithValue }) => {
  console.log(id)
  const response = await fetch(`http://localhost:9600/user/data/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  try {
    const result = await response.json();
    return result.users;
  } catch (error) {
    return rejectWithValue(error);
  }
}
);


export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
    singleUsers: [],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },


  // extraReducers: (builder) => {
  //   builder
  //     .addCase(createUser.pending, (state) => {
  //       state.loading == true
  //     })
  //     .addCase(createUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.users.push(action.payload);
  //     })
  //     .addCase(createUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload.message;
  //     })
  //     .addCase(showUser.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(showUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.users = action.payload;
  //     })
  //     .addCase(showUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.error.message;
  //     })
  //     .addCase(deleteUser.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(deleteUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.users = action.payload; state.loading = false;
  //       console.log(action.payload)
  //       const { _id } = action.payload;
  //       if (_id) {
  //         state.users = state.users.filter((ele) => ele._id !== _id);
  //       }
  //     })
  //     .addCase(deleteUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //     })
  //     .addCase(updateUser.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(updateUser.fulfilled, (state, action) => {
  //       console.log(action.payload)
  //       state.loading = false;
  //       const { _id } = action.payload;
  //       state.users = state.users.map((ele) =>
  //         ele._id === _id ? action.payload : ele
  //       );
  //     })
  //     .addCase(updateUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload.message;
  //     })
  // }

  extraReducers: {
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload)
      const { _id } = action.payload;
      if (_id) {
        state.users = state.users.filter((ele) => ele._id !== _id);
      }
      // const id = action.payload.id
      // if (id) {
      //   state.users = state.users.filter((ele) => ele.id !== id)
      // }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;

    },
    [singleUser.pending]: (state) => {
      state.loading = true;
    },
    [singleUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loading = false;
      state.singleUsers = action.payload;
    },
    [singleUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loading = false;
      const { _id } = action.payload;

      state.users = state.users.map((ele) =>
        ele._id === _id ? action.payload : ele
      );
      // state.users = state.users.map((ele) => (
      //   ele.id === action.payload.id ? action.payload : ele
      // ));
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },


  },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;
