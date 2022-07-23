/* Core */
import React, {FC} from 'react';

/* Interface */
import {Props} from '../interface/PropsInterface'

/* Components */
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

const Layout: FC<Props> = ({children, ...props}) => {
    return (

        <main className={'bg-backgroundPrimary h-screen'}>

            {/* Page Container */}
            <div className="p-4 h-full md:py-12">
                <div className="container mx-auto bg-backgroundPage relative
                                h-full border border-borderPrimary rounded-lg"
                >

                    {/* Navbar */}
                    <Navbar/>

                    {/* Page children */}
                    <section id='page'>
                        {children}
                    </section>

                    {/* Footer */}
                    <Footer/>

                </div>
            </div>

        </main>
    )
}

export default Layout;