import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deleteItems, getItems } from './heplers/fetch2';
import { message } from 'antd'

const initialState = {
    development: 'http://localhost:8000',
    productLoading: false,
    productList: [],
    productLisByID: []
}

export const getProductFun = createAsyncThunk(
    'get-product/admin',
    async ({ data, token }) => {
        const result = await getItems(`${initialState.development}/admin/product/list`, token)
        return result
    }
)

export const removeProductFun = createAsyncThunk(
    'remove-product/admin',
    async ({ data, token }) => {
        const result = await deleteItems(`${initialState.development}/admin/product?product_id=${data}`, token)
        return result
    }
)

export const getProductByIDFun = createAsyncThunk(
    'byid-product/admin',
    async ({ data, token }) => {
        const result = await getItems(`${initialState.development}/admin/product/details?product_id=${data}`, token)
        return result
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        // get product details
        [getProductFun.rejected]: (state, { payload }) => {
            state.productList = []
            message.error('Some error occurred in server side!')
            state.productLoading = false
        },
        [getProductFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.productList = payload.data
                state.productLoading = false
            } else {
                state.productLoading = false
                payload.error && message.error(payload.error ?? '', '!')
            }
        },
        [getProductFun.pending]: (state, { payload }) => {
            state.productList = []
            state.productLoading = false
        },

        [getProductByIDFun.rejected]: (state, { payload }) => {
            state.productLisByID = []
            message.error('Some error occurred in server side!')
        },
        [getProductByIDFun.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.productLisByID = payload.data
            } else payload.error && message.error(payload.error ?? '', '!')
        },
        [getProductByIDFun.pending]: (state, { payload }) => {
            state.productLisByID = []
        },
    }
})

export default productSlice.reducer