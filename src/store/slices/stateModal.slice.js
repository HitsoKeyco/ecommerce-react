import { createSlice } from '@reduxjs/toolkit';

export const stateModal = createSlice({
    name: 'modal',
    initialState: false,
    reducers: {
        setStateModal: (state, action) => action.payload,
    }
})

export const {  setStateModal  } = stateModal.actions;

export default stateModal.reducer;


export const  stateModalThunk = (state) => (dispatch) => {
        dispatch(setStateModal(state))
}
