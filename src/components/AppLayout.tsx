import React, {ReactNode, useState} from "react"

import NavBar from '../components/NavBar';
import NavHeader from '../components/NavHeader';

type Props = {
    children: ReactNode;
}

const AppLayout = ({children}: Props) => {
    const [currentState, setCurrentState] = useState<any>(1);

    return (
        <div className="flex w-screen">
            <NavBar/>
            <div className="w-screen md:w-[calc(100vw-24rem)]">
                {children}
            </div>
        </div>
    );
};

export default AppLayout;
