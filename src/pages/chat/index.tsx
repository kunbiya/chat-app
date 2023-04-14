import react, {useEffect, useRef, useState} from 'react';
import {Link, Outlet, useNavigate, useSearchParams, useLocation} from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux';

import classNames from 'classnames';

import Icon from '@mdi/react';
import {
    mdiMicrophoneOutline,
    mdiPaperclip,
    mdiCameraOutline,
    mdiEmoticonOutline,
    mdiSendVariantOutline,
    mdiMagnify,
    mdiHeartOutline,
    mdiBellOutline,
    mdiExitToApp,
    mdiFormatText,
} from '@mdi/js';
// import Store from '../../redux/Store';

export default function Chat() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const params = searchParams.get("id");

    // const members = useSelector(state => state.getMembers);

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const handleTextarea = () => {
        const rows = textareaRef.current.value.split("\n").length;
        if (rows >= 4) return;
        textareaRef.current.rows = rows;
    }

    const [scale, setScale] = useState<string>("animate-left");
    const chatOut = () => {
        setScale("animate-right");
        setTimeout(() => {
            navigate("/");
        }, 300);
    }

    return (
        <div className={classNames("w-screen md:w-[calc(100vw-24rem)] h-screen absolute top-0 left-0 md:left-96 bg-white dark:bg-zinc-700/[80] z-10", scale)}>
            <div className="flex flex-col flex-1 justify-between h-screen">
                <div className="bg-white pt-10 pb-8 px-8 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:bg-zinc-900/[80] dark:shadow-[0_10px_20px_rgba(255,255,255,0.05)]">
                    <div className="flex justify-between items-center space-x-4">
                        <div className="flex flex-col leading-tight">
                            <div className="text-2xl mt-1 flex items-center">
                                <span className="text-gray-700 mr-3 dark:text-white">John White {params}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-blue-600 hover:bg-blue-600/30 focus:outline-none dark:text-white/80 dark:border-white/20 dark:hover:text-blue-600 dark:hover:bg-gray-300">
                                <Icon path={mdiMagnify} className="h-6 w-6" />
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-rose-500 hover:bg-rose-500/30 focus:outline-none dark:text-white/80 dark:border-white/20 dark:hover:text-rose-500 dark:hover:bg-gray-300">
                                <Icon path={mdiHeartOutline} className="h-6 w-6" />
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-orange-400 hover:bg-orange-400/30 focus:outline-none dark:text-white/80 dark:border-white/20 dark:hover:text-orange-400 dark:hover:bg-gray-300">
                                <Icon path={mdiBellOutline} className="h-6 w-6" />
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-green-600 hover:bg-green-400/30 focus:outline-none dark:text-white/80 dark:border-white/20 dark:hover:text-green-600 dark:hover:bg-gray-300"
                                    onClick={() => chatOut()} >
                                <Icon path={mdiExitToApp} className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div id="messages"
                     className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        Can be verified on any platform using docker
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                                        Your error message says permission denied, npm global installs must be given root privileges.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        Command was run with root privileges. I'm sure about that.
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        I've update the description so it's more obviously now
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        FYI https://askubuntu.com/a/700266/510172
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                         Check the line above (it ends with a # so, I'm running it as root )
                                         <pre># npm install -g @vue/devtools</pre>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                        Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        Thanks for your message David. I thought I'm alone with this issue. Please, ? the issue to support it :)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">
                                        Are you using sudo?
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                        Run this command sudo chown -R /.npm-global/ then install the package globally without using sudo
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        It seems like you are from Mac OS world. There is no /Users/ folder on linux ?
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        I have no issue with any other packages installed with root permission globally.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                        yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-[60%] md:max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        I get the same error on Arch Linux (also with sudo)
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                                        I also have this issue, Here is what I was doing until now: #1076
                                    </span>
                                </div>
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                        even i am facing
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-gray-100 dark:bg-zinc-900/[80]">
                    <div className="relative flex">
                        <span className="absolute inset-y-0 flex items-center">
                            <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                                <Icon path={mdiMicrophoneOutline} className="h-6 w-6 text-gray-600" />
                            </button>
                        </span>
                        <textarea className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                                  rows={1} placeholder="Write your message!" onChange={e => handleTextarea()} ref={el => textareaRef.current = el}></textarea>
                        <div className="items-center inset-y-0 hidden sm:flex">
                            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none text-gray-600 dark:text-white/80 dark:hover:text-zinc-700/80">
                                <Icon path={mdiPaperclip} className="h-6 w-6" />
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none text-gray-600 dark:text-white/80 dark:hover:text-zinc-700/80">
                                <Icon path={mdiCameraOutline} className="h-6 w-6" />
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none text-gray-600 dark:text-white/80 dark:hover:text-zinc-700/80">
                                <Icon path={mdiEmoticonOutline} className="h-6 w-6" />
                            </button>
                            <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none dark:bg-zinc-600 dark:hover:bg-zinc-700/70">
                                <span className="font-bold">Send</span>
                                <Icon path={mdiSendVariantOutline} className="h-6 w-6 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

