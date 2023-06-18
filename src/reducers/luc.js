import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {};

export const lucDetailsSlice = createSlice({
    name :"lucDetails",
    initialState : {value : initialStateValue, selectedCenter: ''},
    reducers : {
        saveLUCDetails : (state, action) => {
            state.value = action.payload;
        },
        setSelectedCenter : (state, action) => {
            state.selectedCenter = action.payload;
        }
    }
});

export  const { saveLUCDetails, setSelectedCenter } = lucDetailsSlice.actions;

export default lucDetailsSlice.reducer;