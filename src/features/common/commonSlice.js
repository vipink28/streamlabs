import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../helper/axios";
import { apiRequests } from "../../helper/apirequests";

const initialState = {
    headerDetails: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderDetails = createAsyncThunk(
    'common/fetchHeaderDetails',
    async (video) => {
        const response = await instance.get(apiRequests.getVideoById(video.platform, video.id));
        return response.data;
    }
)


export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderDetails.pending, (state) => {
                state.headerDetails.status = "loading";
            })
            .addCase(fetchHeaderDetails.fulfilled, (state, action) => {
                state.headerDetails.status = "success";
                state.headerDetails.data = action.payload;
            })
    }
});

export const selectHeaderDetails = (state) => state.common.headerDetails;

export default commonSlice.reducer;