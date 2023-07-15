import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {};

export const masterSlice = createSlice({
    name :"master",
    initialState : {value : initialStateValue},
    reducers : {
        saveMasterDetails : (state, action) => {
            state.value = action.payload;
        }
    }
});

export  const { saveMasterDetails } = masterSlice.actions;

export default masterSlice.reducer;