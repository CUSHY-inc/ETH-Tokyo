import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";

const addr = createSlice({
    name: "addr",
    initialState: '0x0000000',
    reducers: {
        setAddr(state, { type, payload }) {
            return payload;
        }
    }
});

const { setAddr } = addr.actions;

export { setAddr };
export default addr.reducer;