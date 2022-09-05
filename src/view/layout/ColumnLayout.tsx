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
            <div className="flex flex-col h-full lg:flex-row">

                {/* Sidebar section */}
                <section className="flex h-auto basis-auto xl:h-full xl:basis-3/12"
                         id="sidebar-section">

                    {/* Icon section */}
                    <section className="hidden w-2/12 justify-start flex-col items-center
                                    py-2 space-y-3 border-r border-borderLightGray hidden xl:flex">
                        <SvgComponent name={'icon_terminal'} handleClick={openConsole} className={'cursor-pointer'}/>
                        <SvgComponent name={'about_page'}/>
                        <SvgComponent name={'game_page'}/>
                    </section>

                    {/* Folder Section */}
                    {folderSection}

                </section>

                {/* Central Section */}
                <div className="flex flex-col md:min-w-[75%] lg:border-l border-borderLightGray xl:flex-row">
                    <div id="central_section" className="flex flex-col w-full lg:border-l border-borderLightGray xl:flex-row">{centralSection}</div>
                    <div id="terminal-console"
                         className="hidden flex flex-col h-full w-full md:border-l border-borderLightGray md:flex-row">
                        <Terminal
                            commands={commands}
                            welcomeMessage={'Benvenuto in agm-site'}
                            promptLabel={'nightmare@dev:~$'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColumnLayout;