import React, {useEffect, useMemo} from "react";
import {Link, useNavigate} from 'react-router-dom';

import ChatList from "./ChatList";

import Icon from '@mdi/react';
import {mdiAccountMultipleOutline, mdiChatProcessingOutline, mdiCogOutline, mdiForumOutline, mdiThemeLightDark} from '@mdi/js';
import MemberList from "./MemberList";
import ChattingList from "./ChattingList";
import classNames from "classnames";

import { useSelector, useDispatch } from 'react-redux';
import {selectState, setState} from '../redux/state';

// 다크모드 제어
const changeMode = () => {
    if (!localStorage.theme || localStorage.theme === "light") {
        localStorage.theme = "dark";
    } else if (localStorage.theme === "dark") {
        localStorage.theme = "light";
    }

    document.documentElement.setAttribute("class", localStorage.theme);
}

export default function NavBar() {
    const navigate = useNavigate();
    const state = useSelector(selectState).state;
    const dispatch = useDispatch();

    const logout = () => { // localstorage에 key가 없으면 로그인페이지로 redirect
        localStorage.removeItem("key");
        return navigate("/login");
    }
    useEffect(() => {
        document.documentElement.setAttribute("class", localStorage.theme);
    }, []);
    return (
        <>
            {/*데스크탑*/}
            <div className="hidden md:flex flex-col justify-between h-screen w-96 bg-blue-600 border-r border-blue-600/10 dark:bg-zinc-900 dark:border-white/10">
                <div className="flex flex-col gap-y-[15px] p-4 text-white">
                    <div className="mt-1 mb-3 flex justify-between">
                        <div className="flex items-center gap-x-1">
                            <Icon path={mdiChatProcessingOutline} size="24px"/>
                            <span className="text-lg">로고 추가</span>
                        </div>
                        <div className="cursor-pointer text-white" onClick={() => changeMode()}>
                            <Icon path={mdiThemeLightDark} size="24px"/>
                        </div>
                    </div>
                    <ChatList/>
                </div>
                <div className="p-4 text-white" onClick={logout}>
                    <Link to="/login">LOGOUT</Link>
                </div>
            </div>

            {/*모바일*/}
            <>
                <div className="flex md:hidden">
                    <ChatList/>
                </div>
                <div className="flex md:hidden w-full h-20 absolute bottom-0 rounded-t-xl bg-blue-600 border-t border-blue-600/10 dark:bg-zinc-900 dark:border-white/10 overflow-y-hidden">
                    <div className={classNames(state === 1 ? "text-white" : "text-white/70", "flex flex-grow items-center justify-center border-r border-white/20 p-2 hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10")} title="친구 목록"
                         onClick={() => dispatch(setState(1))}>
                        <Icon path={mdiAccountMultipleOutline} size="24px"/>
                    </div>
                    <div className={classNames(state === 2 ? "text-white" : "text-white/70", "flex flex-grow items-center justify-center border-r border-white/20 p-2 hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10")} title="채팅방 목록"
                         onClick={() => dispatch(setState(2))}>
                        <Icon path={mdiForumOutline} size="24px"/>
                    </div>
                    <div className={classNames(state === 3 ? "text-white" : "text-white/70", "flex flex-grow items-center justify-center border-r border-white/20 p-2 hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10")} title="???"
                         onClick={() => dispatch(setState(3))}>
                        <Icon path={mdiCogOutline} size="24px"/>
                    </div>
                    <div className="text-white flex flex-grow items-center justify-center p-2 text-white hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10" onClick={() => changeMode()}>
                        <span className="block h-8 text-3xl leading-8">
                            <Icon path={mdiThemeLightDark} size="24px"/>
                        </span>
                    </div>
                </div>
            </>
        </>
    );
}
