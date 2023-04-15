import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import accountReducer from "./modules/account";
import nftsReducer from "./modules/nfts";
import { Nfts } from "./modules/nfts";
import { Account } from "./modules/account";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedAccountReducer = persistReducer(persistConfig, accountReducer);
const persistedNftsReducer = persistReducer(persistConfig, nftsReducer);

export interface RootState {
    account: Account;
    nfts: Nfts[];
}

export const store = configureStore({
    reducer: {
        account: persistedAccountReducer,
        nfts: persistedNftsReducer
    }
    // reducer: {
    //     reducer: persistReducer,
    //     nfts: nftsReducer,
    // }
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;