import {configureStore} from '@reduxjs/toolkit';
import members from './Members';
import chatLists from './ChatLists';
import state from './state';

export default configureStore({
    reducer: {
        members: members,
        chatLists: chatLists,
        state: state,
    }
});
