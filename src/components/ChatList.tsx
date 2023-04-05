import React from "react";

import Icon from '@mdi/react';
import { mdiAccountMultipleOutline, mdiBookAccountOutline, mdiMagnify } from '@mdi/js';

export default function ChatList() {
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
                <div className="cursor-pointer">
                    <Icon path={mdiAccountMultipleOutline} size="24px" />
                </div>
                <div className="cursor-pointer">
                    <Icon path={mdiBookAccountOutline} size="24px" />
                </div>
                <div className="cursor-pointer">
                    <Icon path={mdiAccountMultipleOutline} size="24px" />
                </div>
            </div>
        </>
    );
}
