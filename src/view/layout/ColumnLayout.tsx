/* Core */
import React, {FC} from 'react';
// @ts-ignore
import Terminal from 'react-console-emulator'

/* Interface */
import {ColumnProps} from '../../interface/PropsInterface'

/* Hooks */
import useStateAboutMe from '../../hooks/useStateAboutMe'

/* Components */
import SvgComponent from "../partials/SvgComponent";

const ColumnLayout: FC<ColumnProps> = ({folderSection, centralSection, id_central_section}) => {

    const {openConsole} = useStateAboutMe()

    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args: any[]) => args.join(' ')
        }
    }

    return (
        <>
            <section className="flex flex-col h-full xl:flex-row">s

                {/* Sidebar section */}
                <div className="flex h-auto basis-auto xl:h-full xl:min-w-[33.3%]" id="sidebar-section">

                    {/* Icon section */}
                    <section className="hidden w-2/12 justify-start flex-col items-center
                                    py-2 space-y-3 border-r border-borderLightGray hidden xl:flex">
                        <SvgComponent name={'icon_terminal'} handleClick={openConsole} className={'cursor-pointer'}/>
                        <SvgComponent name={'about_page'}/>
                        <SvgComponent name={'game_page'}/>
                    </section>

                    {/* Folder Section */}
                    {folderSection}

                </div>

                {/* Central Section */}
                <div id="about_me_box"
                     className="flex flex-col md:min-w-[66.6%] lg:border-l border-borderLightGray xl:flex-row">
                    {centralSection}
                </div>
                <div id="terminal-console"
                     className="hidden flex flex-col h-full w-full lg:border-l border-borderLightGray xl:flex-row">
                    <Terminal
                        commands={commands}
                        welcomeMessage={'Benvenuto in agm-site'}
                        promptLabel={'nightmare@dev:~$'}
                    />
                </div>

            </section>
        </>
    )
}

export default ColumnLayout;