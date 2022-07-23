/* Core */
import React from 'react'

const useStateMenu = () => {

    const handleMenu = () => {
        const items_menu = document.getElementById('items-menu')
        const hamburger_menu = document.getElementById('hamburger-menu')
        const footer = document.getElementById('footer')
        if (!hamburger_menu?.classList.contains('open')) {
            hamburger_menu?.classList.add('open')
            items_menu?.classList.remove('hidden')
            footer?.classList.remove('hidden')
        } else {
            hamburger_menu?.classList.remove('open')
            items_menu?.classList.add('hidden')
            footer?.classList.add('hidden')
        }
    }

    return {handleMenu}
}

export default useStateMenu