import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {};

export const lucDetailsSlice = createSlice({
    name :"lucDetails",
    initialState : {value : initialStateValue, selectedCenter: '', selectedGroup: '', selectedMember :''},
    reducers : {
        saveLUCDetails : (state, action) => {
            state.value = action.payload;
        },
        setSelectedCenter : (state, action) => {
            state.selectedCenter = action.payload;
        },
        setSelectedGroup : (state, action) => {
            state.selectedGroup = action.payload;
        },
        setSelectedMember : (state, action) => {
            state.selectedMember = action.payload;
        }
    }
});

export  const { saveLUCDetails, setSelectedCenter, setSelectedGroup, setSelectedMember } = lucDetailsSlice.actions;

export default lucDetailsSlice.reducer;