import {createSlice} from '@reduxjs/toolkit';

const data = [
    {name: "John White",},
    {name: "Steven Wain",},
    {name: "Ateven Wain",},
    {name: "Bteven Wain",},
    {name: "Cteven Wain",},
    {name: "Dteven Wain",},
    {name: "Eteven Wain",},
    {name: "Fteven Wain",},
    {name: "Gteven Wain",},
    {name: "Hteven Wain",},
    {name: "Iteven Wain",},
    {name: "Jteven Wain",},
    {name: "Kteven Wain",},
    {name: "Lteven Wain",},
    {name: "Mteven Wain",},
    {name: "Nteven Wain",},
    {name: "Oteven Wain",},
    {name: "Pteven Wain",},
    {name: "Qteven Wain",},
    {name: "Rteven Wain",},
    {name: "Steven Wain",},
    {name: "Tteven Wain",},
    {name: "Uteven Wain",},
    {name: "Vteven Wain",},
    {name: "Wteven Wain",},
    {name: "Xteven Wain",},
    {name: "Yteven Wain",},
    {name: "Zteven Wain",},
];

const Members = createSlice({
    name: 'members',
    initialState: data,
    reducers: {
        // getMembers: () => data
    },
});

export const selectMember = (state) => state.members;

export default Members.reducer
