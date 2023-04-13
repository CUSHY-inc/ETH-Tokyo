import { configureStore } from "@reduxjs/toolkit";
import addr from "./modules/addr";
import nfts from "./modules/nfts";

export default configureStore({
    reducer: {
        addr: addr,
        nfts: nfts
    }
});