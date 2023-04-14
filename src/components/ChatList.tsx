import React, {useState} from "react";

import Icon from '@mdi/react';
import { mdiAccountMultipleOutline, mdiForumOutline, mdiMagnify, mdiCogOutline } from '@mdi/js';

import classNames from 'classnames';

import MemberList from '../components/MemberList';
import ChattingList from '../components/ChattingList';

export default function ChatList() {
    const [activeType, setActiveType] = useState<number>(1);

    return (
        <>
            <div>
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <Icon path={mdiMagnify} size="16px"/>
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-white block bg-white/30 w-full rounded-md py-2 pl-9 pr-3 shadow-sm
                        dark:focus:ring-white/50
                        focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Search for anything..." type="text" name="search"/>
                </label>
            </div>
            <div className="flex justify-around">
                <div className={classNames(activeType === 1 ? "text-white" : "text-white/70", "cursor-pointer hover:text-white/90")} title="친구 목록"
                     onClick={() => setActiveType(1)}>
                    <Icon path={mdiAccountMultipleOutline} size="24px"/>
                </div>
                <div className={classNames(activeType === 2 ? "text-white" : "text-white/70", "cursor-pointer hover:text-white/90")} title="채팅방 목록"
                     onClick={() => setActiveType(2)}>
                    <Icon path={mdiForumOutline} size="24px"/>
                </div>
                <div className={classNames(activeType === 3 ? "text-white" : "text-white/70", "cursor-pointer hover:text-white/90")} title="?????"
                     onClick={() => setActiveType(3)}>
                    <Icon path={mdiCogOutline} size="24px"/>
                </div>
            </div>
            <div className="flex max-h-[calc(100vh-245px)]">
                {activeType === 1 ? <MemberList/> : <></>}
                {activeType === 2 ? <ChattingList/> : <></>}
                {/*{activeType === 3 ? <UserSettings/> : <></>}*/}
            </div>
        </>
    );
}
