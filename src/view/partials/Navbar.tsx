/* Core */
import React, {FC} from 'react'
import {NavLink} from "react-router-dom";

/* Hooks */
import useStateMenu from '../../hooks/useStateMenu'

/* Interface */
import {Props} from '../../interface/PropsInterface'

const Navbar: FC<Props> = () => {

    const {handleMenu, location} = useStateMenu()

    return (
        <>
            {/* Navbar */ }
            <header>
                <nav className="relative flex items-center border-b border-borderLightGray min-h-[56.19px]">

                    {/* Logo */ }
                    <div className="text-textLightGray text-[14px] basis-8/12 pl-2 md:basis-4/12">
                        andrea-gregorio-mastracchio
                    </div>

                    {/* Menu desktop */ }
                    <div className="basis-8/12 h-full hidden md:flex ">
                        <NavLink to={"/"}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/' ? "1px solid #FEA55F" : "",
                                 })}
                                 className="flex items-center justify-center text-white h-full min-h-[56.19px]
                                        text-sm grow-[1] border-r border-l border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer">
                            _hello
                        </NavLink>
                        <NavLink to={"/about-me"}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/about-me' ? "1px solid #FEA55F" : "",
                                 })}
                                 className=" flex items-center justify-center text-white h-full min-h-[56.19px]
                                        text-sm grow-[1] border-r border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer">
                            _about-me
                        </NavLink>
                        <NavLink to={"/projects"}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/projects' ? "1px solid #FEA55F" : "",
                                 })}
                                 className="flex items-center justify-center text-white h-full min-h-[56.19px]
                                        text-sm grow-[1] border-r border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer">
                            _projects
                        </NavLink>
                        <div className="grow-[5]"></div>
                        <NavLink to={'/contact-me'}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/contact-me' ? "1px solid #FEA55F" : "",
                                 })}
                                 className="flex items-center justify-center text-white h-full min-h-[56.19px]
                                        text-sm grow-[1] border-l border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer"
                        >
                            _contact-me
                        </NavLink>
                    </div>

                    {/* Hamburger Menu */ }
                    <div
                        className="grow-[2] flex items-center justify-end pr-4 relative hamburger min-h-[24px] md:hidden"
                        id='hamburger-menu'
                        onClick={handleMenu}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </div>
                </nav>

                {/* Menu mobile */ }
                <div className="hidden absolute bg-backgroundPage bottom-[49.74px] w-full top-[56.19px]"
                     id="items-menu">
                    <div className="flex flex-col ">
                        <NavLink to={"/"}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/' ? "1px solid #FEA55F" : "",
                                 })}
                                 className="flex items-center justify-start py-4 pl-3 text-white h-full
                                        text-sm grow-[1] border-b border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer">
                            _hello
                        </NavLink>
                        <NavLink to={"/about-me"}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/about-me' ? "1px solid #FEA55F" : "",
                                 })}
                                 className=" flex items-center justify-start py-4 pl-3 text-white h-full
                                        text-base grow-[1] border-b border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer">
                            _about-me
                        </NavLink>
                        <NavLink to={"/projects"}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/projects' ? "1px solid #FEA55F" : "",
                                 })}
                                 className="flex items-center justify-start py-4 pl-3 text-white h-full
                                        text-base grow-[1] border-b border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer">
                            _projects
                        </NavLink>
                        <div className="grow-[5]"></div>
                        <NavLink to={'/contact-me'}
                                 style={isActive => ({
                                     borderBottom: location.pathname === '/contact-me' ? "1px solid #FEA55F" : "",
                                 })}
                                 className="flex items-center justify-start py-4 pl-3 text-white h-full
                                        text-base grow-[1] border-b border-borderLightGray
                                        hover:border-b-borderHover hover:border-b cursor-pointer"
                        >
                            _contact-me
                        </NavLink>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Navbar;