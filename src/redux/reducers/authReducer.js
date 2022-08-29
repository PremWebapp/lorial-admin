import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postApiWithoutToken } from './heplers/fetch2';
import { message } from 'antd'


const initialState = {
    development: 'http://localhost:8000',
    token: null,
    authLoading: false
}

export const loginFun = createAsyncThunk(
    'login/vendor',
    async (bodydata) => {
        const data = await postApiWithoutToken(`${initialState.development}/admin/auth`, bodydata)
        return data
    }
)

export const logoutFun = createAsyncThunk(
    'logout/vendor',
    async (bodydata) => {
        const data = await postApiWithoutToken(`${initialState.development}/vendor/auth/logout`, bodydata)
        return data
    }
)

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {
        [loginFun.rejected]: (state, { payload }) => {
            message.error('Some error occurred in server side!')
            state.authLoading = false
        },
        [loginFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.authLoading = false
                state.token = payload.token
            } else {
                message.error(payload.error)
                state.authLoading = false
                state.token = null
            }
        },
        [loginFun.pending]: (state, { payload }) => {
            state.authLoading = true
            state.token = null
        },

        // logout
        [logoutFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.token = null
                message.success("Logout succesfully..!")
                return
            } else {
                message.error(payload.error)
            }
        },
        [logoutFun.rejected]: (state, { payload }) => {
            message.error('Some error occurred in server side!')
            state.token = null
        },
        [logoutFun.pending]: (state, { payload }) => {
            state.token = null
        },
    }
})

export default authSlice.reducer