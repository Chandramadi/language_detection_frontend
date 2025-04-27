import { configureStore } from "@reduxjs/toolkit";
import languageDetectionSliceReducer from "./slices/languageDetectionSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        languageDetection: languageDetectionSliceReducer,
    },
    devTools: true,
    // Add any middleware you want to use here
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
