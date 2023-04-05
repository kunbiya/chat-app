import React, {ReactNode, useState} from "react";
import classNames from 'classnames';

export default function NavHeader() {
    const [userMenu, setUserMenu] = useState(false);

    return (
        <nav className="transition backdrop-blur-sm bg-zinc-900/[0.8]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            <div>
                                <button type="button"
                                        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                                        onClick={() => setUserMenu(!userMenu)}
                                >
                                    <img className="h-8 w-8 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt=""/>
                                </button>
                            </div>
                            <div
                                className={classNames(userMenu ? "visible" : "invisible", "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-zinc-900/[0.8] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none")}
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                                <a href="#" className="block px-4 py-2 text-sm text-white" role="menuitem" id="user-menu-item-0">Your Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white" role="menuitem" id="user-menu-item-1">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-white" role="menuitem" id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
