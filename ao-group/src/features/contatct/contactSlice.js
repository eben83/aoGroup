import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    mobile: ''
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        updateContact: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.mobile = action.payload.mobile
        },
    }
})

export const { updateContact } = contactSlice.actions

export default contactSlice.reducer