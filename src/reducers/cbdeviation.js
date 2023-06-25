import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {};

export const cdDeviationSlice = createSlice({
    name :"cbDeviation",
    initialState : {value : initialStateValue},
    reducers : {
        saveCBDeviation : (state, action) => {
            state.value = action.payload;
        }
    }
});

export  const { saveCBDeviation } = cdDeviationSlice.actions;

export default cdDeviationSlice.reducer;