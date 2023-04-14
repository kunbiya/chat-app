import {createSlice} from '@reduxjs/toolkit';

const data = [
    {name: "John White", chat: "djflsadkfjsdfsalkgfjhorhgijroligjareligjed"},
    {name: "abcde White", chat: "채팅 리스트리스트리스트르시 리스트르르스스스스스스 리스트"},
    {name: "박근빈", chat: "2"},
    {name: "Ateven Wain", chat: "11111111111111111111111111111111111111111111111"},
    {name: "Bteven Wain", chat: "2"},
    {name: "Cteven Wain", chat: "3"},
    {name: "Dteven Wain", chat: "4"},
    {name: "Eteven Wain", chat: "5"},
    {name: "Fteven Wain", chat: "6"},
    {name: "Gteven Wain", chat: "7"},
    {name: "Hteven Wain", chat: "8"},
    {name: "Iteven Wain", chat: "8"},
    {name: "Jteven Wain", chat: "9"},
    {name: "Kteven Wain", chat: "6"},
    {name: "Lteven Wain", chat: "23"},
    {name: "Mteven Wain", chat: "242rfdafsdafs"},
    {name: "Nteven Wain", chat: "242rfdafsdafs"},
    {name: "Oteven Wain", chat: "242rfdafsdafs"},
    {name: "Pteven Wain", chat: "242rfdafsdafs"},
    {name: "Qteven Wain", chat: "242rfdafsdafs"},
    {name: "Rteven Wain", chat: "242rfdafsdafs"},
    {name: "Steven Wain", chat: "242rfdafsdafs"},
    {name: "Tteven Wain", chat: ""},
    {name: "Uteven Wain", chat: "242rfdafsdafs"},
    {name: "Vteven Wain", chat: "242rfdafsdafs"},
    {name: "Wteven Wain", chat: "242rfdafsdafs"},
    {name: "Xteven Wain", chat: "242rfdafsdafs"},
    {name: "Yteven Wain", chat: "242rfdafsdafs"},
    {name: "Zteven Wain", chat: "242rfdafsdafs"},
];

const ChatLists = createSlice({
    name: 'chatLists',
    initialState: data,
    reducers: {
        // getMembers: () => data
    },
});

export const selectChatLists = (state) => state.chatLists;

export default ChatLists.reducer
