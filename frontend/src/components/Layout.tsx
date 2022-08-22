/* Core */
import React, {FC} from 'react';

/* Interface */
import {Props} from '../interface/PropsInterface'

/* Components */
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const Layout: FC<Props> = ({children}) => {

    return (
        <main className="flex bg-backgroundPrimary min-h-screen p-2">
            <div className="container bg-backgroundPage border border-borderLightGray
                            rounded-sm flex flex-col relative">

                {/* Navbar */}
                <Navbar/>

                <div className="flex-1">
                    {children}
                </div>

                {/* Footer */}
                <Footer/>

            </div>
        </main>
    )
}

export default Layout;