import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import historyReducer from "../features/counter/historySlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        history: historyReducer
    }
})

export default store;