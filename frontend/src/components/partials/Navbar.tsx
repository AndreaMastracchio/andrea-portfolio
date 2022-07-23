/* Core */
import React, {FC} from 'react'
import {NavLink, useLocation} from "react-router-dom";

/* Hooks */
import useStateMenu from '../../hooks/useStateMenu'

/* Interface */
import {Props} from '../../interface/PropsInterface'

const Navbar: FC<Props> = () => {

    const {handleMenu} = useStateMenu()
    const location = useLocation();

    return (
        <nav className="relative container mx-auto border-b border-borderLightGray md:h-[56px]">


            {/* Flex container */}
            <div className="flex justify-between items-center py-3 px-3 md:p-0">

                {/* Logo - Name */}
                <NavLink
                    to={"/"}
                    className="md:border-r md:border-borderLightGray cursor-pointer
                                md:flex md:justify-start md:items-center md:h-[56px] md:w-4/12 md:pl-4">

                    <p className="text-textLightGray font-2xl">andrea-gregorio-mastracchio</p>
                </NavLink>

                {/* Menu */}
                <div className="hidden md:flex md:justify-between md:items-center md:w-8/12 md:h-[56px]">
                    <NavLink
                        className="px-2 border-r border-borderLightGray border-b
                                    md:h-[56px] w-3/12 flex items-center justify-center
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                        to={"/"}
                        style={isActive => ({
                            borderBottomColor: location.pathname === '/' ? "#FEA55F" : ""
                        })}>
                        <p className="text-white">
                            _hello
                        </p>
                    </NavLink>
                    <NavLink
                        className="px-2 border-r border-borderLightGray border-b
                                    md:h-[56px] w-3/12 flex items-center justify-center
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                        to={"/about-me"}
                        style={isActive => ({
                            borderBottomColor: location.pathname === '/about-me' ? "#FEA55F" : ""
                        })}>
                        <p className="text-white">
                            _about-me
                        </p>
                    </NavLink>
                    <NavLink
                        className="px-2 border-r border-borderLightGray border-b
                                    md:h-[56px] w-3/12 flex items-center justify-center
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                        to={"/projects"}
                        style={isActive => ({
                            borderBottomColor: location.pathname === '/projects' ? "#FEA55F" : ""
                        })}>
                        <p className="text-white">
                            _projects
                        </p>
                    </NavLink>
                    <div className="text-white border-r border-borderLightGray
                                    md:h-[56px] w-4/12">
                    </div>
                    <NavLink
                        className="px-2 border-r border-borderLightGray border-b
                                    md:h-[56px] w-3/12 flex items-center justify-center
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                        to={"/contact-me"}
                        style={isActive => ({
                            borderBottomColor: location.pathname === '/contact-me' ? "#FEA55F" : ""
                        })}>
                        <p className="text-white">
                            _contact-me
                        </p>
                    </NavLink>
                </div>

                {/* Hamburger menu */}
                <div
                    id='hamburger-menu'
                    onClick={handleMenu}
                    className="block hamburger md:hidden focus:outline-none mt-3 right-6 absolute"
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </div>

                {/* Mobile menu item */}
                <div className="md:hidden">
                    <div
                        id="items-menu"
                        className="absolute flex-col items-center hidden
                                   self-end mt-6 index z-50 bg-backgroundPage
                                   sm:w-auto sm:self-center left-0 right-0"
                    >
                        <NavLink
                            className="px-2 border-borderLightGray border-b py-4
                                    md:h-[56px] w-full flex items-center justify-start
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                            to={"/"}
                            style={isActive => ({
                                borderBottomColor: location.pathname === '/' ? "#FEA55F" : ""
                            })}>
                            <p className={`text-white ${location.pathname === '/' ? "text-borderHover" : "" ? "active" : ""}`}>
                                _hello
                            </p>
                        </NavLink>
                        <NavLink
                            className="px-2 border-borderLightGray border-b py-4
                                    md:h-[56px] w-full flex items-center justify-start
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                            to={"/about-me"}
                            style={isActive => ({
                                borderBottomColor: location.pathname === '/about-me' ? "#FEA55F" : ""
                            })}>
                            <p className={`text-white ${location.pathname === '/about-me' ? "text-borderHover" : "" ? "active" : ""}`}>
                                _about-me
                            </p>
                        </NavLink>
                        <NavLink
                            className="px-2 border-borderLightGray border-b py-4
                                    md:h-[56px] w-full flex items-center justify-start
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                            to={"/projects"}
                            style={isActive => ({
                                borderBottomColor: location.pathname === '/projects' ? "#FEA55F" : ""
                            })}>
                            <p className={`text-white ${location.pathname === '/projects' ? "text-borderHover" : "" ? "active" : ""}`}>
                                _projects
                            </p>
                        </NavLink>
                        <div className="text-white border-r border-borderLightGray
                                    md:h-[56px] w-full">
                        </div>
                        <NavLink
                            className="px-2 border-borderLightGray border-b py-4
                                    md:h-[56px] w-full flex items-center justify-start
                                    hover:border-b-borderHover hover:border-b cursor-pointer"
                            to={"/contact-me"}
                            style={isActive => ({
                                borderBottomColor: location.pathname === '/contact-me' ? "#FEA55F" : ""
                            })}>
                            <p className={`text-white ${location.pathname === '/contact-me' ? "text-borderHover" : "" ? "active" : ""}`}>
                                _contact-me
                            </p>
                        </NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;