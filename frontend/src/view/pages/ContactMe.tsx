/* Core */
import React from 'react'
// @ts-ignore
import Terminal from 'react-console-emulator'

/* Hooks */
import useStateAboutMe from '../../hooks/useStateAboutMe'
import ColumnLayout from "../layout/ColumnLayout";
import ContactsAccordion from "../partials/ContactsAccordion";

const ContactMe = () => {

    const {handleAbout, handleFolder, openConsole} = useStateAboutMe()

    const folderSection = (
        <div className="md:basis-10/12 grow">
            <ContactsAccordion/>
        </div>
    )

    const centralSection = (
        <>
            <div className="basis-6/12">
                <section id="card-open" className="flex flex-col h-full">
                    <div className="hidden md:flex border-b border-borderLightGray w-full">
                        <div
                            className="min-h-[35px] flex items-center gap-2 pl-2 pr-3 py-2
                                           border-r border-borderLightGray cursor-pointer">
                            <p className="text-textLightGray text-sm"> contacts </p>
                            <div id="info-card" onClick={(e: React.MouseEvent<HTMLDivElement>) => handleAbout(e)}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207 13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721 9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z"
                                        fill="#607B96"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div id="about_me_text" className="flex flex-col gap-4 px-1 py-2 coding basis-full">
                        <div className="text-start pt-4 px-3 text-textLightGray md:hidden">
                            // contacts
                        </div>
                        <form className="flex flex-col justify-center py-2 px-2">
                            <label htmlFor="name">_name:</label>
                            <input type="text" name="name" placeholder="Jonathan Davis"
                                   className="focus:text-white border border-borderLightGray bg-[#011221] text-textLightGray py-2 px-3"/>
                            <label htmlFor="name">_email:</label>
                            <input type="text" name="email" placeholder="jonathandavis@gmail.com"
                                   className="focus:text-white border border-borderLightGray bg-[#011221] text-textLightGray py-2 px-3"
                            />
                            <label htmlFor="name">_message:</label>
                            <textarea name="message" placeholder="message"
                                      className="focus:text-white border border-borderLightGray bg-[#011221]
                                                  text-textLightGray py-2 px-3 min-h-[160px]"
                            />
                            <button id="form-contact-me"
                                    className="flex justify-center rounded-md items-center px-2 py-1 text-white bg-[#1C2B3A] mt-6">
                                submit-message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            <div className="basis-6/12 md:border-l border-borderLightGray pb-4">
                <div
                    className="min-h-[37px] hidden items-center gap-2 border-b border-borderLightGray pl-2 pr-3 py-2 md:flex">
                </div>
                <div className="py-2 px-3">
                    <p className="text-textLightGray text-sm"> // Code message: </p>
                </div>
                <div className="flex flex-col mx-3 gap-5">
                    <div>
                        <span className="text-backgroundConst">const </span>
                        <span className="text-username">button </span>
                        <span className="text-backgroundConst">= </span>
                        <span className="text-username"> document.querySelector(<span
                            className="text-borderHover">'#form-contact-me'</span>)</span>
                    </div>
                    <div>
                        <span className="text-backgroundConst">const </span>
                        <span className="text-username">message </span>
                        <span className="text-backgroundConst">= </span>
                        <span className="text-username"> {'{'} </span> <br/>
                        <div className="pl-3 flex flex-col">
                            <span className="text-username">name: <span
                                className="text-borderHover">"Jonathan Davis"</span></span>
                            <span className="text-username">email: <span
                                className="text-borderHover">"jonathandavis@gmail.com"</span></span>
                            <span className="text-username">message: <span className="text-borderHover">"Hi, I would like to contact you about a project I would like to realise. Could you give me some slots for a call?
Thanyyou"</span></span>
                            <span className="text-username">date: <span
                                className="text-borderHover">"Jonathan Davis"</span></span>
                        </div>
                        <span className="text-username"> {'}'} </span> <br/>
                    </div>
                    <div>
                        <span className="text-backgroundConst">const </span>
                        <span className="text-username">button </span>
                        <span className="text-backgroundConst">= </span>
                        <span className="text-username"> button.addEventListener(<span
                            className="text-borderHover">'click'</span>, () {'=>'} {'{'} <br/>
                                    <span className="pl-4">form.send(message);</span> <br/>
                            {'}'})
                            </span>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>

            {/* Projects */}
            <ColumnLayout
                folderSection={folderSection}
                centralSection={centralSection}
                id_central_section={'contacts_me_box'}
            />

        </>
    )
}

export default ContactMe