import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    openNav: false,
    openCategories:false,
}

export const generalSlice = createSlice({
    name: "generalSlice",
    initialState,
    reducers: {
        openSideNav: (state, action) => {
            state.openNav = true
        },
        closeSideNav: (state, action) => {
            state.openNav = false
            state.openCategories = false
        },
        openSideCategories: (state, action) => {
            state.openCategories = true
        },

    },
    extraReducers: {

    }
})



export default generalSlice.reducer
export const {
    openSideNav,
    closeSideNav,
    openSideCategories,
    
}
    = generalSlice.actions


























