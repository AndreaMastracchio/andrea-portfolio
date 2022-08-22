/* Core */
import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";

const useStateMenu = () => {

    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isOpen) {
            closeMenu()
            setOpen(false)
        }
    }, [location]);

    const closeMenu = () => {
        let items_menu = document.getElementById('items-menu')
        let hamburger_menu = document.getElementById('hamburger-menu')
        let footer = document.getElementById('footer')
        hamburger_menu?.classList.remove('open')
        items_menu?.classList.toggle('hidden')
        footer?.classList.toggle('hidden')
    }

    const openMenu = () => {
        let items_menu = document.getElementById('items-menu')
        let hamburger_menu = document.getElementById('hamburger-menu')
        let footer = document.getElementById('footer')
        hamburger_menu?.classList.toggle('open')
        items_menu?.classList.remove('hidden')
        footer?.classList.remove('hidden')
    }

    const handleMenu = () => {
        let hamburger_menu = document.getElementById('hamburger-menu')
        if (!hamburger_menu?.classList.contains('open')) {
            openMenu()
            setOpen(true)
        } else {
            closeMenu()
            setOpen(false)
        }
    }

    return {handleMenu, location, setOpen}
}

export default useStateMenu