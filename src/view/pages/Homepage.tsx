/* Core */
import React, {FC} from 'react';

/* Interface */
import {Props} from '../../interface/PropsInterface'

const Homepage: FC<Props> = () => {

    return (
        <>

            {/* Homepage */}
            <section id="homepage" className="flex justify-start items-center h-full md:justify-around">

                {/* Items left */}
                <div className="flex flex-col justify-start gap-2 py-24 px-4 md:pt-16">
                    <p className="text-white text-base"> Hi all. I am </p>
                    <h1 className="text-white text-4xl">
                        Andrea <br/>
                        Gregorio <br/>
                        Mastracchio <br/>
                    </h1>
                    <p className="text-developerGreen md:text-developerBlue leading-7
                                       text-base md:leading-9">
                        &#62; Full-stack developer
                    </p>
                    <div className="flex flex-col pt-48 gap-2 md:pt-20">
                        <p className="text-developerComment text-xs"> // find my profile on github </p>
                        <p className="text-developerComment">
                            <span className="text-developerBlue text-xs">const </span>
                            <span className="text-developerGreen text-xs">githubLink</span>
                            <span className="text-white text-xs"> = </span>
                            <a className="text-developerString underline underline-offset-1 text-xs">"https://
                                <br className="md:hidden"/>github.com/AndreaMastracchio"</a>
                        </p>
                    </div>
                </div>

                {/* Items right */}
                <div className="hidden flex-col justify-start gap-2 py-24 px-4 md:pt-16 md:flex">
                    <p className="text-white text-base"> Hi all. I am </p>
                    <h1 className="text-white text-4xl">
                        Andrea <br/>
                        Gregorio <br/>
                        Mastracchio <br/>
                    </h1>
                    <p className="text-developerGreen md:text-developerBlue leading-7
                                       text-base md:leading-9">
                        &#62; Full-stack developer
                    </p>
                    <div className="flex flex-col pt-48 gap-2 md:pt-20">
                        <p className="text-developerComment text-xs"> // find my profile on github </p>
                        <p className="text-developerComment">
                            <span className="text-developerBlue text-xs">const </span>
                            <span className="text-developerGreen text-xs">githubLink</span>
                            <span className="text-white text-xs"> = </span>
                            <a className="text-developerString underline underline-offset-1 text-xs">"https://
                                <br className="md:hidden"/>github.com/AndreaMastracchio"</a>
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Homepage;