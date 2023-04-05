import React, {useEffect, useMemo} from "react";
import {Link, useNavigate} from 'react-router-dom';

import ChatList from "./ChatList";

import Icon from '@mdi/react';
import {mdiChatProcessingOutline, mdiThemeLightDark} from '@mdi/js';

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
    const logout = () => {
        localStorage.removeItem("key");
        return navigate("/login");
    }
    useEffect(() => {
        document.documentElement.setAttribute("class", localStorage.theme);
    }, []);
    return (
        <div className="flex flex-col justify-between h-screen w-96 bg-blue-600  border-r border-blue-600/10
        dark:bg-zinc-900 dark:border-white/10">
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
    );
}
