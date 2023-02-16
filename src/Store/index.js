import { configureStore } from "@reduxjs/toolkit"
import generalSlice from "./generalSlice.js"
export const store = configureStore({
    reducer: {
        "generalSlice": generalSlice,
    }
})
export default store