import React, {useState, useEffect} from 'react';
import Icon from '@mdi/react';
import {mdiLock} from '@mdi/js';
import photo from "../../images/photo-1.png";

import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    const [disabled, setDisabled] = useState(true);
    const [key, setKey] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("key")) {
            return navigate("/");
        }
    }, []);

    const redirect = () => {
        localStorage.setItem("key", key);
    }

    const inputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisabled(!e.target.value);
        setKey(e.target.value);
    }

    return (
        <div className="bg-yellow-300 w-screen h-screen">
            <div className="flex min-h-full items-center justify-center px-8">
                <div className="flex flex-col items-center w-80 gap-y-3">
                    <div>
                        <img src={photo} className="inline-block rounded-full ring-2 ring-white w-12 h-12" alt="image"/>
                    </div>
                    <div>
                        <span className="text-base font-bold">Key를 입력해주세요.</span>
                    </div>

                    <div className="w-full pt-3">
                        <input type="password" onChange={e => inputEvent(e)} value={key}
                               className="w-full h-10 rounded-sm px-4 py-2 text-sm border border-[rgba(249,249,249,0.3)]
                               hover:border-indigo-700 active:border-indigo-700 focus:border-indigo-700"
                        />
                    </div>

                    <div className="w-full h-9">
                        <Link to="/">
                            <button type="submit" disabled={disabled} onClick={() => redirect()}
                                    className="group relative flex w-full justify-center rounded-sm border border-transparent
                                    py-2 px-4 text-sm font-medium text-indigo-700 bg-slate-300 text-medium h-10
                                    hover:bg-indigo-700 hover:text-white
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                                    disabled:bg-slate-300 disabled:text-indigo-400
                                    ">
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <Icon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                              path={mdiLock} size={1}/>
                                  </span>
                                확인
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
