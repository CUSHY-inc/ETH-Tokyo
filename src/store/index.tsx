import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/addr";

export default configureStore({
    reducer: {
        addr: reducer
    },
});