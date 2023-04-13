import { createSlice } from "@reduxjs/toolkit";

const addr = createSlice({
    name: "addr",
    initialState: '',
    reducers: {
        setAddr(state, { type, payload }) {
            return payload;
        }
    }
});

export const { setAddr } = addr.actions;
export default addr.reducer;