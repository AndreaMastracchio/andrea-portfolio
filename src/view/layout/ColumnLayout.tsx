/* Core */
import React, {FC} from 'react';

/* Interface */
import {ColumnProps} from '../../interface/PropsInterface'

/* Hooks */
import useStateAboutMe from '../../hooks/useStateAboutMe'

/* Components */
import SvgComponent from "../partials/SvgComponent";

const ColumnLayout: FC<ColumnProps> = ({
                                           folderSection,
                                           centralSection,
                                           id_central_section
                                       }) => {

    const {openConsole} = useStateAboutMe()

    return (
        <>
            <section className="flex flex-col h-full xl:flex-row">

                {/* Sidebar section */}
                <div className="flex h-auto basis-auto xl:h-full xl:basis-4/12" id="sidebar-section">

                    {/* Icon section */}
                    <section className="hidden basis-2/12 justify-start flex-col items-center
                                    py-2 space-y-3 border-r border-borderLightGray hidden xl:flex">
                        <SvgComponent name={'icon_terminal'}/>
                        <SvgComponent name={'about_page'}/>
                        <SvgComponent name={'game_page'}/>
                    </section>

                    {/* Folder Section */}
                    {folderSection}

                </div>

                {/* Central Section */}
                <div className="flex flex-col md:basis-8/12 border-l border-borderLightGray xl:flex-row">
                    {centralSection}
                </div>

            </section>
        </>
    )
}

export default ColumnLayout;