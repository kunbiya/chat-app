import React, {useEffect, useRef} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import AppLayout from "./components/AppLayout";

import chatLogo from "./images/chat-logo.svg";

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}
const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const nodeRef = useRef();



    useEffect(() => {
        if (!localStorage.getItem("key")) {
            return navigate("/login");
        }
    }, []);
    return (
        <>
            <AppLayout>
                <div>
                    <div className="flex justify-center h-screen bg-white dark:bg-zinc-800/[80]">
                        <img src={chatLogo} alt="chat logo" width={200} height={200}/>
                    </div>
                    <TransitionGroup component={null} exit={false}>
                        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={300} classNames="right"
                                       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} unmountOnExit>
                            <Outlet/>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </AppLayout>
        </>
    );
}

export default App;
