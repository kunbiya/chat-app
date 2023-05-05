import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import classNames from 'classnames';

import {useSelector, useDispatch} from 'react-redux';
import {selectMember} from '../redux/Members';
import {selectState} from "../redux/state";

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
const randomHex = (index) => ['#f57917', '#35bbb7', '#c1f25b', '#eeb551', '#844e51', '#480ab9', '#8b357e', '#17d94d', '#ce7bf6'][index];

// 아바타 텍스트
const avatarText = (text: string) => {
    if (!text) return "A";
    return text.split("")[0].toUpperCase();
}

const MemberList = () => {
    const navigate = useNavigate();
    const members = useSelector(selectMember);
    const state = useSelector(selectState).state;

    // 데스크탑 - 친구목록 더블 클릭시 채팅창 이동
    const handleDoubleClick = (index) => navigate(`/chat?id=${index}`);

    // 모바일 - 친구목록 클릭시 채팅창 이동 + 애니메이션 효과제어
    const handleClick = (index) => {
        setTimeout(() => { // 애니메이션 효과 0.3s 보여주고 이동하기 위한 제어
            return navigate(`/chat?id=${index}`);
        }, 300);
    }

    return (
        <>
            {/*데스크탑*/}
            <div className="hidden md:block w-full overflow-y-auto pt-3">
                <div className="flex flex-col gap-y-3">
                    {members.map((value, index) => (
                        <div key={"member-d"+index} className="flex items-center gap-x-3 cursor-pointer hover:rounded-lg hover:bg-white/10 h-10"
                             aria-label={String(index)} onDoubleClick={e => handleDoubleClick(index)}>
                            <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold" style={{backgroundColor: randomHex(index%9)}}>
                                {avatarText(value["name"])}
                            </div
                            <div>{value["name"]}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/*모바일*/}
            <div className={classNames("md:hidden flex absolute top-0 left-0 m-4 max-w-[calc(100vw-2rem)]")}>
                <div className="flex flex-col p-4 gap-y-3 w-screen max-h-[calc(100vh-80px-1rem)] bg-blue-500 rounded-t-xl overflow-y-auto dark:bg-zinc-700">
                    {members.map((value, index) => (
                        <div key={"member-m"+index} className="flex items-center gap-x-3 cursor-pointer text-white hover:rounded-lg hover:bg-white/10 h-10"
                             aria-label={String(index)} onClick={() => handleClick(index)}>
                            <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold" style={{backgroundColor: randomHex(index%9)}}>
                                {avatarText(value["name"])}
                            </div>
                            <div>{value["name"]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MemberList;
