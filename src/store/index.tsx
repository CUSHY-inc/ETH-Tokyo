import { configureStore } from "@reduxjs/toolkit";
import addrReducer from "./modules/addr";
import nftsReducer from "./modules/nfts";
import { Nfts } from "./modules/nfts";

export interface RootState {
    addr: string;
    nfts: Nfts[];
}

export const store = configureStore({
    reducer: {
        addr: addrReducer,
        nfts: nftsReducer
    }
});

export type AppDispatch = typeof store.dispatch;

export default store;