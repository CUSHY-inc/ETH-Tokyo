import { createSlice } from "@reduxjs/toolkit";

export interface Account {
    addr: string;
    isConnect: boolean;
}

const initialState: Account = {
    addr: '',
    isConnect: false
};

const account = createSlice({
    name: "account",
    initialState: initialState,
    reducers: {
        setAccount(state, { type, payload }) {
            return payload;
        }
    }
});

export const { setAccount } = account.actions;
export default account.reducer;