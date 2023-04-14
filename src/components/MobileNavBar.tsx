import React, {useEffect, useMemo, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';

import ChatList from "./ChatList";

import classNames from 'classnames';

import MemberList from '../components/MemberList';
import ChattingList from '../components/ChattingList';

import Icon from '@mdi/react';
import {mdiChatProcessingOutline, mdiThemeLightDark, mdiAccountMultipleOutline, mdiForumOutline, mdiMagnify, mdiCogOutline } from '@mdi/js';

const changeMode = () => {
    if (!localStorage.theme || localStorage.theme === "light") {
        localStorage.theme = "dark";

    } else if (localStorage.theme === "dark") {
        localStorage.theme = "light";
    }

    document.documentElement.setAttribute("class", localStorage.theme);
}

export default function MobileNavBar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("key");
        return navigate("/login");
    }
    useEffect(() => {
        document.documentElement.setAttribute("class", localStorage.theme);
    }, []);

    const [activeType, setActiveType] = useState<number>(0);
    const [hidden, setHidden] = useState<string>("hidden");

    const [trigger, setTrigger] = useState<boolean>(false);





    const [memberShow, setMemberShow] = useState<boolean>(false);
    const [chattingShow, setChattingShow] = useState<boolean>(false);

    const handleActiveType = (type: number) => {
        if (type === 1) {
            setChattingShow(false);
            setMemberShow(!memberShow);
        } else if (type === 2) {
            setMemberShow(false);
            setChattingShow(!chattingShow);
        }
    }
    return (
        <>
            <div className="flex overflow-y-hidden">
                <MemberList type={activeType} memberShow={memberShow}/>
                <ChattingList type={activeType} chattingShow={chattingShow}/>
                {/*{activeType === 3 ? <UserSettings/> : <></>}*/}
            </div>
            <div className="flex w-full h-20 absolute bottom-0 rounded-t-xl bg-blue-600 border-t border-blue-600/10 dark:bg-zinc-900 dark:border-white/10 overflow-y-hidden">
                <div className={classNames(activeType === 1 ? "text-white" : "text-white/70", "flex flex-grow items-center justify-center border-r border-white/20 p-2 hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10")} title="친구 목록"
                     onClick={() => handleActiveType(1)}>
                    <Icon path={mdiAccountMultipleOutline} size="24px"/>
                </div>
                <div className={classNames(activeType === 2 ? "text-white" : "text-white/70", "flex flex-grow items-center justify-center border-r border-white/20 p-2 hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10")} title="채팅방 목록"
                     onClick={() => handleActiveType(2)}>
                    <Icon path={mdiForumOutline} size="24px"/>
                </div>
                <div className={classNames(activeType === 3 ? "text-white" : "text-white/70", "flex flex-grow items-center justify-center border-r border-white/20 p-2 hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10")} title="???"
                     onClick={() => handleActiveType(3)}>
                    <Icon path={mdiCogOutline} size="24px"/>
                </div>
                <div className="cursor-pointer text-white flex flex-grow items-center justify-center p-2 text-white hover:text-white/90 hover:bg-black/10 hover:dark:bg-white/10" onClick={() => changeMode()}>
                    <span className="block h-8 text-3xl leading-8">
                        <Icon path={mdiThemeLightDark} size="24px"/>
                    </span>
                </div>
            </div>
        </>
    );
}
