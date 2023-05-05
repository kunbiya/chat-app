import {createSlice} from '@reduxjs/toolkit';

const State = createSlice({
    name: 'state',
    initialState: {state: 1},
    reducers: {
        //메뉴 선택 TYPE bind
        setState: (state, action) => {
            state.state = action.payload;
        },
    },
});

export const selectState = (state) => state.state;

export default State.reducer;
export const {setState} = State.actions;
