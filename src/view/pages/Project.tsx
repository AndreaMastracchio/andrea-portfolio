/* Core */
import React, {FC} from 'react';

/* Interface */
import {Card, Props} from '../../interface/PropsInterface'

/* Layout */
import ColumnLayout from "../layout/ColumnLayout";

/* Partials Components */
import ContactsAccordion from "../partials/ContactsAccordion";

const Project: FC<Props> = ({}) => {

    const folderSection = (
        <div className="md:basis-10/12 grow">
            <ContactsAccordion/>
        </div>
    )

    // Cards
    const cards: Card[] = [
        {
            image: 'url(/images/cube-3d.png)',
            text: 'Testo progetto 1',
            id_project: 1
        },
        {
            image: 'url(/images/cube-3d.png)',
            text: 'Testo progetto 2',
            id_project: 2
        },
        {
            image: 'url(/images/cube-3d.png)',
            text: 'Testo progetto 3',
            id_project: 3
        },
        {
            image: 'url(/images/cube-3d.png)',
            text: 'Testo progetto 3',
            id_project: 4
        }
    ]

    const htmlCard = (item: Card, i: number) => {
        return (
            <section id={'project_id_' + item.id_project} key={i}
                 className="border border-borderLightGray rounded-2xl
                            flex flex-col gap-4 my-4 mx-4 pb-4">
            <div>
                <div className="min-h-[200px] rounded-t-2xl bg-center bg-no-repeat bg-auto"
                     style={{backgroundImage: item.image}}>
                </div>
                <div className="flex flex-col gap-2 px-4">
                    <p className="text-textLightGray">
                        item.text
                    </p>
                    <button
                        className="flex justify-center rounded-md items-center px-2 py-1
                                   text-white bg-[#1C2B3A] w-full lg:w-1/2">
                        <p className="text-center">view-project</p>
                    </button>
                </div>
            </div>
        </section>
        )
    }

    const centralSection = (
        <div className="relative w-full">
            <div className="blur basis-full">
                <section className="flex flex-col h-full">
                    <div className="md:flex border-b border-borderLightGray w-full">
                        <div
                            className="min-h-[35px] flex items-center gap-2 pl-2 pr-3 py-2
                                           md:border-r border-borderLightGray cursor-pointer">
                            <p className="text-textLightGray text-sm"> projects </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {
                            cards.map(function (item: Card, i: number) {
                                return (
                                    htmlCard(item, i)
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            <div className="absolute top-[20%] left-[30%] md:top-[25%] md:left-[50%]">
                <p className="text-white text-2xl font-bold z-30"> Coming Soon </p>
                <hr className="w-[100%] z-30"/>
                <div className="z-30">
                </div>
            </div>
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