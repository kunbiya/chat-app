import React, {ReactNode} from "react"

import NavBar from '../components/NavBar';
import NavHeader from '../components/NavHeader';

type Props = {
    children: ReactNode;
}

const AppLayout = ({children}: Props) => {
    // const router = useRouter();
    // const navRender = router.pathname !== "/login";

    return (
        <>
            <div className="hidden md:flex">
                {/*{navRender ? <NavBar/> : <></>}*/}
                <NavBar/>
                <div className="w-full h-screen">
                    {/*<NavHeader />*/}
                    {children}
                </div>
            </div>
            <div className="md:hidden">모바일 사이즈</div>
        </>
    );
};

export default AppLayout;
