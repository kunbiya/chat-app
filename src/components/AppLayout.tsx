import React, {ReactNode} from "react"

import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import NavHeader from '../components/NavHeader';

type Props = {
    children: ReactNode;
}

const AppLayout = ({children}: Props) => {
    // const router = useRouter();
    // const navRender = router.pathname !== "/login";

    return (
        <>
            <div className="hidden md:flex w-screen">
                {/*{navRender ? <NavBar/> : <></>}*/}
                <NavBar/>
                <div className="w-[calc(100vw-24rem)]">
                    {/*<NavHeader />*/}
                    {children}
                </div>
            </div>
            <div className="md:hidden flex">
                <div className="w-screen">
                    {children}
                </div>
                <MobileNavBar />
            </div>
        </>
    );
};

export default AppLayout;
