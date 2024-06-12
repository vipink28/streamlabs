import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import instance from "../../helper/axios";
import { apiRequests } from "../../helper/apirequests";
import { act } from "react";

const initialState = {
    netflixOrginals: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
        const response = await instance.get(apiRequests.getNetflixOriginals);
        return response.data;
    }
)


export const tvSlice = createSlice({
    name: "tv",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNetflixOriginals.pending, (state) => {
                state.netflixOrginals.status = "loading";
            })
            .addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
                state.netflixOrginals.status = "success";
                state.netflixOrginals.data = action.payload;
            })
    }
});

export const netflixOrignalsSelector = (state) => state.tv.netflixOrginals;

export default tvSlice.reducer;