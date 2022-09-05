/* Core */
import React, {FC} from 'react';

/* Interface */
import {Props} from '../../interface/PropsInterface'

/* Components */
import CountDown from "../partials/CountDown";

const Homepage: FC<Props> = () => {

    return (
        <>

            {/* Homepage */}
            <section id="homepage" className="flex h-full">

                {/* Items left */}
                <div className="min-w-1/2 px-6 flex justify-center items-center">
                    <div className="">
                        <p className="text-white text-xl"> Hi all. I am </p>
                        <h1 className="text-white text-5xl md:text-6xl">
                            Andrea <br/>
                            Gregorio <br/>
                            Mastracchio <br/>
                        </h1>
                        <p className="text-developerGreen leading-7 text-xl md:leading-9 md:text-developerBlue ">
                            &#62; Full-stack developer
                        </p>
                        <div className="flex flex-col pt-48 gap-2 md:pt-20">
                            <p className="text-developerComment text-base"> // find my profile on github </p>
                            <p className="text-developerComment">
                                <span className="text-developerBlue text-base">const </span>
                                <span className="text-developerGreen text-base">githubLink</span>
                                <span className="text-white text-xs text-base"> = </span>
                                <a className="text-developerString underline underline-offset-1 text-base">"https://
                                    <br className="md:hidden"/>github.com/AndreaMastracchio"</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Items right */}
                <div className="w-1/2 hidden justify-center gap-4 flex-col relative items-center md:flex m-4">
                    <div className="w-full h-1/2 bg-hero-pattern flex justify-center items-center
                                    bg-center bg-cover blur-sm absolute">
                    </div>
                    <p className="text-white text-2xl font-bold z-30"> Coming Soon </p>
                    <hr className="w-[40%] z-30"/>
                    <div className="z-30">
                        <CountDown/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Homepage;