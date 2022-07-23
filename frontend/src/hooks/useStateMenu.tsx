/* Core */
import React, {useState} from 'react'

const useStateMenu = () => {

    const [open, setOpen] = useState(false)

    const handleMenu = (e: any) => {
        e.preventDefault()
        const items_menu = document.getElementById('items-menu')
        const hamburger_menu = document.getElementById('hamburger-menu')
        const footer = document.getElementById('footer')
        if (!open) {
            hamburger_menu?.classList.add('open')
            items_menu?.classList.remove('hidden')
            footer?.classList.remove('hidden')
            setOpen(true)
        } else {
            hamburger_menu?.classList.remove('open')
            items_menu?.classList.add('hidden')
            footer?.classList.add('hidden')
            setOpen(false)
        }
    }

    return {handleMenu}
}

export default useStateMenu