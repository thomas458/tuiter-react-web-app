import { createSlice } from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk} from "../services/auth-thunks";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null, error : null, loading: false},
    reducers: {},
    currentUser: null,
    extraReducers: {
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },

        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
            state.loading = false;
            state.error = null;
        },
        [loginThunk.rejected]: (state, { payload }) => {
            state.users = [];
            state.error = true;
            state.error = null;
        },
    },
});
export default authSlice.reducer;