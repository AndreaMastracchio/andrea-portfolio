/* Core */
import React, {FC} from 'react';

/* Interface */
import {Props} from '../../interface/PropsInterface'

/* Layout */
import ColumnLayout from "../layout/ColumnLayout";

/* Partials Components */
import ContactsAccordion from "../partials/ContactsAccordion";

const Project: FC<Props> = () => {

    const folderSection = (
        <div className="md:basis-10/12 grow">
           <ContactsAccordion />
        </div>
    )

    const centralSection = (
        <div className="basis-full">
            <section className="flex flex-col h-full">
                <div className="md:flex border-b border-borderLightGray w-full">
                    <div
                        className="min-h-[35px] flex items-center gap-2 pl-2 pr-3 py-2
                                           md:border-r border-borderLightGray cursor-pointer">
                        <p className="text-textLightGray text-sm"> projects </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:justify-around h-full md:h-auto">
                    <div
                        className="border border-borderLightGray rounded-2xl flex flex-col gap-4 my-4 mx-4 pb-4">
                        <div className="min-h-[200px] rounded-t-2xl bg-center bg-no-repeat bg-auto"
                             style={{backgroundImage: "url(/images/cube-3d.png)"}}>
                        </div>
                        <div className="flex flex-col gap-2 px-4">
                            <p className="text-textLightGray">
                                Duis aute irure dolor in velit esse cillum dolore.
                            </p>
                            <button
                                className="w-1/2 flex justify-center rounded-md items-center px-2 py-1 text-white bg-[#1C2B3A]">
                                <p className="text-center">view-project</p>
                            </button>
                        </div>
                    </div>
                    <div
                        className="border border-borderLightGray rounded-2xl flex flex-col gap-4 my-4 mx-4 pb-4">
                        <div className="min-h-[200px] rounded-t-2xl bg-center bg-no-repeat bg-auto"
                             style={{backgroundImage: "url(/images/pc.png)"}}>
                        </div>
                        <div className="flex flex-col gap-2 px-4">
                            <p className="text-textLightGray">
                                Duis aute irure dolor in velit esse cillum dolore.
                            </p>
                            <button
                                className="w-1/2 flex justify-center rounded-md items-center px-2 py-1 text-white bg-[#1C2B3A]">
                                <p className="text-center">view-project</p>
                            </button>
                        </div>
                    </div>
                    <div
                        className="border border-borderLightGray rounded-2xl flex flex-col gap-4 my-4 mx-4 pb-4">
                        <div className="min-h-[200px] rounded-t-2xl bg-center bg-no-repeat bg-auto"
                             style={{backgroundImage: "url(/images/eth.png)"}}>
                        </div>
                        <div className="flex flex-col gap-2 px-4">
                            <p className="text-textLightGray">
                                Duis aute irure dolor in velit esse cillum dolore.
                            </p>
                            <button
                                className="w-1/2 flex justify-center rounded-md items-center px-2 py-1 text-white bg-[#1C2B3A]">
                                <p className="text-center">view-project</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

    return (
        <>

            {/* Projects */}
            <ColumnLayout
                folderSection={folderSection}
                centralSection={centralSection}
                id_central_section={'projects_box'}
            />

        </>
    )
}

export default Project