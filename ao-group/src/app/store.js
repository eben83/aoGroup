import {configureStore } from "@reduxjs/toolkit";
import contactReducer from '../features/contatct/contactSlice'

export const store = configureStore({
    reducer: {
        contact: contactReducer,
    },
})