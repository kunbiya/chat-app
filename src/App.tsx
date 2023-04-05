import React, {useEffect} from 'react';

import {Link, Outlet, useNavigate} from "react-router-dom";

import AppLayout from "./components/AppLayout";

import logo from './logo.svg';
import './App.css';

function App() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("key")) {
            return navigate("/login");
        }
    }, []);
    return (
        <AppLayout>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Link to="/test" preventScrollReset={true}>
                        <div className="text-lg text-indio-700">Learn React</div>
                    </Link>
                </header>
                <Outlet/>
            </div>
        </AppLayout>
    );
}

export default App;
