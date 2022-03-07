import { createSlice  } from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,
    mobile: null
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

export const selectFirstName = (state) => state.contact.firstName
export const selectLastName = (state) => state.contact.lastName
export const selectMobile = (state) => state.contact.mobile

export default contactSlice.reducer