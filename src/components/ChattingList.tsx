import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import classNames from "classnames";

import { useSelector, useDispatch } from 'react-redux';
import {selectChatLists} from '../redux/ChatLists';

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
// const randomHex = (index) => ['#f57917', '#35bbb7', '#c1f25b', '#eeb551', '#844e51', '#480ab9', '#8b357e', '#17d94d', '#ce7bf6'][getRandomInt(0, 9)];
const randomHex = (index) => ['#f57917', '#35bbb7', '#c1f25b', '#eeb551', '#844e51', '#480ab9', '#8b357e', '#17d94d', '#ce7bf6'][index];

const avatarText = (text: string) => {
    if (!text) return "A";
    return text.split("")[0].toUpperCase();
}

const ChattingList = () => {
    const navigate = useNavigate();
    const chatList = useSelector(selectChatLists);

    // 데스크탑 - 채팅방목록 더블 클릭시 채팅창 이동
    const handleDoubleClick = (e, index) => navigate(`/chat?id=${index}`);

    // 모바일 - 채팅방목록 클릭시 채팅창 이동 + 애니메이션 효과제어
    const handleClick = (index) => {
        setTimeout(() => {
            return navigate(`/chat?id=${index}`);
        }, 300);
    }

    return (
        <>
            {/*데스크탑*/}
            <div className="hidden md:block w-full overflow-y-auto pt-3">
                <div className="flex flex-col gap-y-3">
                    {chatList.map((value, index) => (
                        <Tooltip key={"chatting-d"+index} title={value["chat"]} arrow disableInteractive enterDelay={1000} placement="right-end">
                            <div className="flex items-center gap-x-3 cursor-pointer hover:rounded-lg hover:bg-white/10"
                                 aria-label={String(index)} onDoubleClick={e => handleDoubleClick(e, index)}>
                                <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold" style={{backgroundColor: randomHex(index%9)}}>
                                    {avatarText(value["name"])}
                                </div>
                                <div className="flex flex-col">
                                    <span>{value["name"]}</span>
                                    <div className="text-xs text-white/60 max-w-[280px] overflow-hidden text-ellipsis whitespace-nowrap">
                                        {value["chat"]}
                                    </div>
                                </div>
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </div>
            {/*모바일*/}
            <div className={classNames("md:hidden flex absolute top-0 left-0 m-4 max-w-[calc(100vw-2rem)]")}>
                <div className="flex flex-col p-4 gap-y-3 w-screen max-h-[calc(100vh-80px-1rem)] bg-blue-500 rounded-t-xl overflow-y-auto dark:bg-zinc-700">
                    {chatList.map((value, index) => (
                        <div key={"chatting-m"+index} className="flex items-center gap-x-3 cursor-pointer text-white hover:rounded-lg hover:bg-white/10 h-10"
                             aria-label={String(index)} onClick={() => handleClick(index)}>
                            <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold" style={{backgroundColor: randomHex(index%9)}}>
                                {avatarText(value["name"])}
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <div className="text-white">{value["name"]}</div>
                                <div className="text-white/80 text-sm max-w-[65vw] overflow-hidden text-ellipsis whitespace-nowrap">{value["chat"]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ChattingList ;
