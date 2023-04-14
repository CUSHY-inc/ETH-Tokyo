import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./modules/account";
import nftsReducer from "./modules/nfts";
import { Nfts } from "./modules/nfts";
import { Account } from "./modules/account";

export interface RootState {
    account: Account;
    nfts: Nfts[];
}

export const store = configureStore({
    reducer: {
        account: accountReducer,
        nfts: nftsReducer
    }
});

export type AppDispatch = typeof store.dispatch;

export default store;