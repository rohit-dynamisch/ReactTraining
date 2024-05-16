import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Signup, login } from "./authApi";
const initialState={
    user:[],
    status:"idle",
    error:null
}


export const signUpAsync = createAsyncThunk(
    "user/createUser",
    async (userData) => {
    const response = await Signup(userData);
    return response.data;
    }
  );
  
   
  
  export const loginAsync = createAsyncThunk(
    'user/loginUser',
    async (loginInfo, { rejectWithValue }) => {
      try {
        const response = await login(loginInfo);
        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error);
      }
    }
  );


export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        signOut:(state)=>{
            state.user=[];   
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signUpAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(signUpAsync.fulfilled, (state, action) => {
          state.status = "idle";
          state.user = action.payload;
        })
        .addCase(signUpAsync.rejected, (state, action) => {
          state.status = "idle";
          state.error = action.payload.message;
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
          state.status = "idle";
          state.user = action.payload?.length>0?action.payload:[];
        })
    },
  


})

export const {signOut}=authSlice.actions;

export default authSlice.reducer;