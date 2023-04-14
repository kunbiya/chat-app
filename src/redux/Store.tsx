import {configureStore} from '@reduxjs/toolkit';
import members from './Members';
import chatLists from './ChatLists';

export default configureStore({
    reducer: {
        members: members,
        chatLists: chatLists,
    }
});
