/* Core */
import React from 'react'
import {useLocation} from "react-router-dom";

const useStateAboutMe = () => {

    const location = useLocation();

    const open = (element: HTMLElement) => {
        element.classList.remove('close-card')
        element.classList.add('open-card')
        element.classList.add('md:open-card')
        element.classList.remove('hidden')
        element.classList.add('md:block')
    }

    const close = (element: HTMLElement) => {
        element.classList.add('close-card')
        element.classList.remove('open-card')
        element.classList.remove('md:open-card')
        element.classList.remove('md:block')
    }

    const handleAbout = (e: React.MouseEvent<HTMLDivElement>) => {
        let element = (e.currentTarget as HTMLInputElement).getAttribute('id')
        let about_me_text = document.getElementById('about_me_text')
        let card = document.getElementById('card-open');
        switch (element) {
            case 'personal-info':
                let personal_info_box = document.getElementById('personal-info-menu')
                if (personal_info_box && about_me_text && card) {
                    if (personal_info_box?.classList.contains('open-card')) {
                        close(personal_info_box)
                    } else {
                        open(personal_info_box)
                        open(about_me_text)
                        open(card)
                    }
                }
                break
            case 'contacts':
                let personal_contacts_box = document.getElementById('personal-contacts-menu')
                if (personal_contacts_box) {
                    if (personal_contacts_box?.classList.contains('md:open-card') || personal_contacts_box?.classList.contains('open-card')) {
                        close(personal_contacts_box)
                    } else {
                        open(personal_contacts_box)
                    }
                }
                break
            case 'info-card':
                document.getElementById('card-open')?.classList.add('close-card')
                about_me_text?.classList.add('close-card')
                about_me_text?.classList.remove('open-card')
                break
        }
    }

    const openAccordion = (element: HTMLElement, personal_ul_list: HTMLCollectionOf<Element>) => {
        let id_element = element.getAttribute('id')
        for (let i = 0; i < personal_ul_list.length; i++) {
            if (id_element !== personal_ul_list[i].getAttribute('id')) {
                closeAccordion(personal_ul_list[i] as HTMLElement)
                element.querySelector('.child-option')?.classList.add('hidden')
            }
        }
        element.querySelector('.close-svg')?.classList.add('hidden')
        element.querySelector('.open-svg')?.classList.remove('hidden')
        element.querySelector('p')?.classList.add('text-white')
        element.querySelector('.child-option')?.classList.remove('hidden')
    }

    const closeAccordion = (element: HTMLElement) => {
        element.querySelector('.open-svg')?.classList.add('hidden')
        element.querySelector('.close-svg')?.classList.remove('hidden')
        element.querySelector('p')?.classList.remove('text-white')
        element.querySelector('.child-option')?.classList.add('hidden')
        element.classList.remove('open-card')
    }

    const handleFolder = (e: React.MouseEvent<HTMLLIElement>, menu_folder: string) => {
        let element = e.currentTarget as HTMLElement
        let personal_ul_list = document.getElementsByClassName('personal-ul-list')
        if (!e.currentTarget.classList.contains('open-card')) {
            openAccordion(element, personal_ul_list)
            e.currentTarget.classList.add('open-card')
        } else {
            closeAccordion(element)
        }

        switch (menu_folder) {
            case 'bio':
                document.getElementById('about_me_text')?.classList.remove('hidden')
                document.getElementById('interests_text')?.classList.add('hidden')
                document.getElementById('education_text')?.classList.add('hidden')
                break;
            case 'interests':
                document.getElementById('interests_text')?.classList.remove('hidden')
                document.getElementById('education_text')?.classList.add('hidden')
                document.getElementById('about_me_text')?.classList.add('hidden')
                break;
            case 'education':
                document.getElementById('education_text')?.classList.remove('hidden')
                document.getElementById('interests_text')?.classList.add('hidden')
                document.getElementById('about_me_text')?.classList.add('hidden')
                break;
        }
    }

    const openConsole = () => {
            document.getElementById('about_me_box')?.classList.add('hidden')
            document.getElementById('terminal-console')?.classList.add('open-card')
        if (document.getElementById('terminal-console')?.classList.contains('hidden')) {
            document.getElementById('terminal-console')?.classList.remove('hidden')
        } else {
            document.getElementById('terminal-console')?.classList.add('hidden')
            document.getElementById('terminal-console')?.classList.remove('open-card')
            document.getElementById('about_me_box')?.classList.remove('hidden')
        }

    }

    return {handleAbout, location, handleFolder, openConsole}
}

export default useStateAboutMe