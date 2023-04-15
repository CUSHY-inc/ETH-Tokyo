import { createSlice } from "@reduxjs/toolkit";

export interface Account {
    addr: string;
    isConnect: boolean;
    lensToken: string;
    worldcoinToken: string;
    file: File | null;
    encryptedFile: File | null;
    encryptedSymmetricKey: string | null;
    fileSize: number;
}

const initialState: Account = {
    addr: '',
    isConnect: false,
    lensToken: '',
    worldcoinToken: '',
    file: null,
    encryptedFile: null,
    encryptedSymmetricKey: null,
    fileSize: 0,
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