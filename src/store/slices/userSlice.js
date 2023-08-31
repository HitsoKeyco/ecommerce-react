import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: false,
    reducers: {
        setUser: (state, action) => action.payload
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const  stateUserThunk = (state) => (dispatch) => {
    dispatch(setUser(state))
}
