import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import classNames from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import {selectMember} from '../redux/Members';

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
// const randomHex = (index) => ['#f57917', '#35bbb7', '#c1f25b', '#eeb551', '#844e51', '#480ab9', '#8b357e', '#17d94d', '#ce7bf6'][getRandomInt(0, 9)];
const randomHex = (index) => ['#f57917', '#35bbb7', '#c1f25b', '#eeb551', '#844e51', '#480ab9', '#8b357e', '#17d94d', '#ce7bf6'][index];

const avatarText = (text: string) => {
    if (!text) return "A";
    return text.split("")[0].toUpperCase();
}

type memberType = {
    type?: number,
    memberShow?: boolean,
}

const MemberList = ({type, memberShow}: memberType) => {
    const navigate = useNavigate();
    const members = useSelector(selectMember);

    const handleDoubleClick = (index) => {
        return navigate(`/chat?id=${index}`);
    }
    const handleClick = (index) => {
        setScale("down-scale");
        setTimeout(() => {
            return navigate(`/chat?id=${index}`);
        }, 300);
    }

    const [scale, setScale] = useState("");
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        if (typeof memberShow === "undefined") return;
        if (memberShow) {
            setScale("up-scale");
            setHidden(false);
        } else {
            setScale("down-scale");
            setTimeout(() => {
                setHidden(true);
            }, 300);
        }
    }, [memberShow]);

    return (
        <>
            {/*데스크탑*/}
            <div className="hidden md:block w-full overflow-y-auto pt-3">
                <div className="flex flex-col gap-y-3">
                    {members.map((value, index) => (
                        <div key={index} className="flex items-center gap-x-3 cursor-pointer hover:rounded-lg hover:bg-white/10 h-10"
                             aria-label={String(index)} onDoubleClick={e => handleDoubleClick(index)}>
                            <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold" style={{backgroundColor: randomHex(index%9)}}>
                                {avatarText(value["name"])}
                            </div>
                            <div>{value["name"]}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/*모바일*/}
            {/*<div className={classNames("md:hidden flex absolute top-0 left-0 m-4 max-w-[calc(100vw-2rem)]", action, scale)}>*/}
            <div className={classNames("md:hidden flex absolute top-0 left-0 m-4 max-w-[calc(100vw-2rem)]", hidden ? "hidden" : "", scale)}>
                <div className="flex flex-col p-4 gap-y-3 w-screen max-h-[calc(100vh-80px-1rem)] bg-blue-600 rounded-t-xl overflow-y-auto dark:bg-zinc-700">
                    {members.map((value, index) => (
                        <div key={index} className="flex items-center gap-x-3 text-white hover:rounded-lg hover:bg-white/10 h-10"
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
