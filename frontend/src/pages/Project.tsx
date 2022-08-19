/* Core */
import React, {FC} from 'react';

/* Interface */
import {Props} from '../interface/PropsInterface'

/* Hooks */
import useStateAboutMe from '../hooks/useStateAboutMe'

/* Image */

const Project: FC<Props> = () => {

    const {handleAbout, handleFolder} = useStateAboutMe()

    return (
        <div id="about_me" className="flex flex-col h-full xl:flex-row">
            <div className="md:hidden min-h-[35px] flex justify-start items-center py-7 px-4">
                <p className="text-white">_projects</p>
            </div>
            <div className="flex xl:basis-4/12">
                <section className="hidden basis-2/12 justify-start flex-col items-center
                                    py-2 space-y-3 border-r border-borderLightGray hidden xl:flex">
                    <svg className="cursor-pointer" width="18" height="25" viewBox="0 0 24 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path
                                d="M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z"
                                fill="#607B96"/>
                        </g>
                    </svg>
                    <svg className="cursor-pointer" width="18" height="25" viewBox="0 0 24 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 20.6519H19V22.6519H5V20.6519ZM12 18.6519C9.87827 18.6519 7.84344 17.809 6.34315 16.3087C4.84285 14.8084 4 12.7736 4 10.6519C4 8.53012 4.84285 6.49529 6.34315 4.995C7.84344 3.49471 9.87827 2.65186 12 2.65186C14.1217 2.65186 16.1566 3.49471 17.6569 4.995C19.1571 6.49529 20 8.53012 20 10.6519C20 12.7736 19.1571 14.8084 17.6569 16.3087C16.1566 17.809 14.1217 18.6519 12 18.6519Z"
                            fill="#607B96"/>
                    </svg>
                    <svg className="cursor-pointer" width="18" height="25" viewBox="0 0 24 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                            <path
                                d="M17 4.87793C18.5913 4.87793 20.1174 5.51007 21.2426 6.63529C22.3679 7.76051 23 9.28663 23 10.8779V14.8779C23 16.4692 22.3679 17.9954 21.2426 19.1206C20.1174 20.2458 18.5913 20.8779 17 20.8779H7C5.4087 20.8779 3.88258 20.2458 2.75736 19.1206C1.63214 17.9954 1 16.4692 1 14.8779V10.8779C1 9.28663 1.63214 7.76051 2.75736 6.63529C3.88258 5.51007 5.4087 4.87793 7 4.87793H17ZM10 9.87793H8V11.8779H6V13.8779H7.999L8 15.8779H10L9.999 13.8779H12V11.8779H10V9.87793ZM18 13.8779H16V15.8779H18V13.8779ZM16 9.87793H14V11.8779H16V9.87793Z"
                                fill="#607B96"/>
                        </g>
                    </svg>
                </section>
                <section className="md:basis-10/12 grow">
                    <div
                        className="min-h-[25px] bg-backgroundAccordionMobile flex items-center
                                   gap-2 border-b border-borderLightGray pl-2 pr-3 py-2
                                   cursor-pointer lg:bg-none"
                        id="personal-info" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleAbout(e)}>
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z" fill="white"/>
                        </svg>
                        <p className="text-white text-sm lg:text-textLightGray "> personal info </p>
                    </div>
                    <ul id="personal-info-menu"
                        className="open-card w-full space-y-1 border-b border-borderLightGray pl-2 pr-3 py-2">
                        <li className="flex flex-col gap-1 personal-ul-list cursor-pointer " id="bio"
                            onClick={(e: React.MouseEvent<HTMLLIElement>) => handleFolder(e)}>
                            <div className="flex items-center gap-3">
                                <div className="min-w-[15px] flex justify-center items-center">
                                    <svg className="cursor-pointer close-svg" width="9" height="14" viewBox="0 0 9 14"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
                                            fill="#607B96"/>
                                    </svg>
                                    <svg className="cursor-pointer hidden open-svg" width="13" height="9"
                                         viewBox="0 0 13 9"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z"
                                            fill="#607B96"/>
                                    </svg>
                                </div>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
                                        fill="#E99287"/>
                                </svg>
                                <p className="text-textLightGray text-sm">
                                    bio
                                </p>
                            </div>
                            <div className="child-option pl-7 hidden">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3 cursor-pointer">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                                                fill="#81A1C1"/>
                                        </svg>
                                        <p className="text-textLightGray text-sm">
                                            high-school
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-3 cursor-pointer">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                                                fill="#81A1C1"/>
                                        </svg>
                                        <p className="text-textLightGray text-sm">
                                            high-school
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex flex-col gap-1 personal-ul-list cursor-pointer " id="interests"
                            onClick={(e: React.MouseEvent<HTMLLIElement>) => handleFolder(e)}>
                            <div className="flex items-center gap-3">
                                <div className="min-w-[15px] flex justify-center items-center">
                                    <svg className="close-svg" width="9" height="14" viewBox="0 0 9 14"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
                                            fill="#607B96"/>
                                    </svg>
                                    <svg className="hidden open-svg" width="13" height="9"
                                         viewBox="0 0 13 9"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z"
                                            fill="#607B96"/>
                                    </svg>
                                </div>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.0802 3.98074V12.6474C15.0802 12.839 15.0041 13.0227 14.8687 13.1581C14.7332 13.2935 14.5495 13.3696 14.358 13.3696H1.35796C1.16642 13.3696 0.982719 13.2935 0.847276 13.1581C0.711833 13.0227 0.635742 12.839 0.635742 12.6474V3.25852H14.358C14.5495 3.25852 14.7332 3.33461 14.8687 3.47005C15.0041 3.60549 15.0802 3.78919 15.0802 3.98074ZM8.15696 1.81407H0.635742V1.09185C0.635742 0.900306 0.711833 0.716606 0.847276 0.581163C0.982719 0.44572 1.16642 0.369629 1.35796 0.369629H6.71252L8.15696 1.81407Z"
                                        fill="#43D9AD"/>
                                </svg>
                                <p className="text-textLightGray text-sm">
                                    interests
                                </p>
                            </div>
                            <div className="child-option pl-7 hidden">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3 cursor-pointer ">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                                                fill="#81A1C1"/>
                                        </svg>
                                        <p className="text-textLightGray text-sm">
                                            high-school
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-3 cursor-pointer ">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                                                fill="#81A1C1"/>
                                        </svg>
                                        <p className="text-textLightGray text-sm">
                                            high-school
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="flex flex-col gap-1 personal-ul-list cursor-pointer " id="education"
                            onClick={(e: React.MouseEvent<HTMLLIElement>) => handleFolder(e)}>
                            <div className="flex items-center gap-3">
                                <div className="min-w-[15px] flex justify-center items-center">
                                    <svg className="close-svg" width="9" height="14" viewBox="0 0 9 14"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
                                            fill="#607B96"/>
                                    </svg>
                                    <svg className="hidden open-svg" width="13" height="9"
                                         viewBox="0 0 13 9"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z"
                                            fill="#607B96"/>
                                    </svg>
                                </div>
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.0802 4.49392V13.1606C15.0802 13.3521 15.0041 13.5358 14.8687 13.6713C14.7332 13.8067 14.5495 13.8828 14.358 13.8828H1.35796C1.16642 13.8828 0.982719 13.8067 0.847276 13.6713C0.711833 13.5358 0.635742 13.3521 0.635742 13.1606V3.7717H14.358C14.5495 3.7717 14.7332 3.84779 14.8687 3.98324C15.0041 4.11868 15.0802 4.30238 15.0802 4.49392ZM8.15696 2.32726H0.635742V1.60503C0.635742 1.41349 0.711833 1.22979 0.847276 1.09435C0.982719 0.958904 1.16642 0.882813 1.35796 0.882812H6.71252L8.15696 2.32726Z"
                                        fill="#3A49A4"/>
                                </svg>
                                <p className="text-textLightGray text-sm">
                                    education
                                </p>
                            </div>
                            <div className="child-option pl-7 hidden">
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3 cursor-pointer ">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                                                fill="#81A1C1"/>
                                        </svg>
                                        <p className="text-textLightGray text-sm">
                                            high-school
                                        </p>
                                    </li>
                                    <li className="flex items-center gap-3 cursor-pointer ">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.44684 0.832031H16.0466C16.2617 0.832031 16.468 0.917486 16.6201 1.0696C16.7722 1.22171 16.8577 1.42801 16.8577 1.64313V14.6207C16.8577 14.8358 16.7722 15.0421 16.6201 15.1942C16.468 15.3463 16.2617 15.4318 16.0466 15.4318H1.44684C1.23172 15.4318 1.02542 15.3463 0.873307 15.1942C0.721197 15.0421 0.635742 14.8358 0.635742 14.6207V1.64313C0.635742 1.42801 0.721197 1.22171 0.873307 1.0696C1.02542 0.917486 1.23172 0.832031 1.44684 0.832031ZM4.69122 10.9707V7.72635L6.31342 9.34854L7.93561 7.72635V10.9707H9.5578V5.29306H7.93561L6.31342 6.91525L4.69122 5.29306H3.06903V10.9707H4.69122ZM13.6133 8.53745V5.29306H11.9911V8.53745H10.3689L12.8022 10.9707L15.2355 8.53745H13.6133Z"
                                                fill="#81A1C1"/>
                                        </svg>
                                        <p className="text-textLightGray text-sm">
                                            high-school
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="flex flex-col md:basis-8/12 border-l border-borderLightGray xl:flex-row">
                <section className="basis-full">
                    <section className="flex flex-col h-full">
                        <div className="hidden md:flex border-b border-borderLightGray w-full">
                            <div
                                className="min-h-[35px] flex items-center gap-2 pl-2 pr-3 py-2
                                           border-r border-borderLightGray cursor-pointer">
                                <p className="text-textLightGray text-sm"> projects </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-3 md:justify-around h-full md:h-auto">
                            <div className="border border-borderLightGray rounded-2xl flex flex-col gap-4 my-4 mx-4 pb-4">
                                <div className="min-h-[200px] rounded-t-2xl bg-center bg-no-repeat bg-cover"
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
                            <div className="border border-borderLightGray rounded-2xl flex flex-col gap-4 my-4 mx-4 pb-4">
                                <div className="min-h-[200px] rounded-t-2xl bg-center bg-no-repeat bg-cover"
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
                            <div className="border border-borderLightGray rounded-2xl flex flex-col gap-4 my-4 mx-4 pb-4">
                                <div className="min-h-[200px] rounded-t-2xl bg-center bg-no-repeat  bg-cover"
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
                </section>
            </div>
        </div>
    )
}

export default Project