import React, {useEffect, useState} from "react";

import Icon from '@mdi/react';
import { mdiAccountMultipleOutline, mdiForumOutline, mdiMagnify, mdiCogOutline } from '@mdi/js';

import classNames from 'classnames';

import MemberList from '../components/MemberList';
import ChattingList from '../components/ChattingList';

import { useSelector, useDispatch } from 'react-redux';
import {selectState, setState} from '../redux/state';

export default function ChatList() {
    const state = useSelector(selectState).state;
    const dispatch = useDispatch();

    return (
        <>
            {/*데스크탑*/}
            <div className="hidden md:flex flex-col gap-y-[15px]">
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
                    <div className={classNames(state === 1 ? "text-white" : "text-white/70", "cursor-pointer hover:text-white/90")} title="친구 목록"
                         onClick={() => dispatch(setState(1))}>
                        <Icon path={mdiAccountMultipleOutline} size="24px"/>
                    </div>
                    <div className={classNames(state === 2 ? "text-white" : "text-white/70", "cursor-pointer hover:text-white/90")} title="채팅방 목록"
                         onClick={() => dispatch(setState(2))}>
                        <Icon path={mdiForumOutline} size="24px"/>
                    </div>
                    <div className={classNames(state === 3 ? "text-white" : "text-white/70", "cursor-pointer hover:text-white/90")} title="?????"
                         onClick={() => dispatch(setState(3))}>
                        <Icon path={mdiCogOutline} size="24px"/>
                    </div>
                </div>
                <div className="flex max-h-[calc(100vh-245px)]">
                    {state === 1 ? <MemberList/> : <></>}
                    {state === 2 ? <ChattingList/> : <></>}
                    {/*{state === 3 ? <UserSettings/> : <></>}*/}
                </div>
            </div>

            {/*모바일*/}
            <>
                <div className="flex md:hidden">
                    <div className="flex max-h-[calc(100vh-245px)]">
                        {state === 1 ? <MemberList/> : <></>}
                        {state === 2 ? <ChattingList/> : <></>}
                        {/*{state === 3 ? <UserSettings/> : <></>}*/}
                    </div>
                </div>
            </>
        </>
    );
}
