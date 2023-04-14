import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getNfts from "@/src/features/nfts/api/getNfts";

export interface Nfts {
    contractAddr: string;
    title: string;
    image: string;
}

export const fetchNfts = createAsyncThunk(
    'nfts/fetchNfts',
    async (payload: { addr: string; chain: string }) => {
        const nfts = await getNfts(payload.addr, payload.chain);
        return nfts;
    }
);

const nfts = createSlice({
    name: "nfts",
    initialState: [] as Nfts[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNfts.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export default nfts.reducer;