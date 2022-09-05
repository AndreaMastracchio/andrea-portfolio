/* Core */
import React, {useState} from 'react'
import {CodeBlock, dracula} from "react-code-blocks";

/* Layout */
import ColumnLayout from "../layout/ColumnLayout";
import ContactsAccordion from "../partials/ContactsAccordion";

const ContactMe = () => {

    const defaultMessage = 'Hi, I would like to contact you about a project I would like to realise. Could you give me some slots for a call? Thank you'
    const [nameValue, setName] = useState<string>('Nome Cognome')
    const [emailValue, setEmail] = useState<string>('Email')
    const [messageValue, setMessage] = useState<string>(defaultMessage)
    const dateValue = new Date()

    const folderSection = (
        <div className="md:basis-10/12 grow">
            <ContactsAccordion/>
        </div>
    )

    const form_container = (
        <div className="flex flex-col gap-4 px-1 py-2 coding basis-full">
            <div className="text-start pt-4 px-3 text-textLightGray md:hidden">
                // contacts
            </div>
            <form className="flex flex-col justify-center py-2 px-2" id='contact-form'>
                <label className="text-white pb-3" htmlFor="name">_name:</label>
                <input onChange={(e) => setName(e.currentTarget.value)} value={nameValue} type="text"
                       name="name" placeholder="Jonathan Davis"
                       className="focus:text-white border border-borderLightGray bg-[#011221] text-textLightGray py-2 px-3"/>
                <label className="text-white py-3" htmlFor="name">_email:</label>
                <input onChange={(e) => setEmail(e.currentTarget.value)} value={emailValue} type="text"
                       name="email" placeholder="jonathandavis@gmail.com"
                       className="focus:text-white border border-borderLightGray bg-[#011221] text-textLightGray py-2 px-3"
                />
                <label className="text-white py-3" htmlFor="name">_message:</label>
                <textarea onBlur={(e: any) => (
                    e.currentTarget.value.length <= 1 ? setMessage(defaultMessage) : null
                )}
                          value={messageValue}
                          onFocus={() => setMessage('')}
                          placeholder={messageValue}
                          onChange={(e) => setMessage(e.currentTarget.value)}
                          name="message"
                          className="focus:text-white border border-borderLightGray bg-[#011221]
                                                text-textLightGray py-2 px-3 min-h-[160px]"
                />
                <button id="button-contact-me"
                        className="flex justify-center rounded-md items-center px-2 py-1 text-white bg-[#1C2B3A] mt-6">
                    submit-message
                </button>
            </form>
        </div>
    )

    const code_message =
        'const button =  document.querySelector(\'#contact-form\')\n' +
        'const message =  { \n' +
            +'name: "' + nameValue + '"\n' +
            'email: "' + emailValue + '"\n' +
            'message: "' + defaultMessage + '"\n' +
            'date: "' + dateValue + '"\n' +
        '} \n' +
        'const button =  button.addEventListener(\'click\', () => { \n' +
        'form.send(message);\n' +
        '})'

    const message_container = (
        <div className="w-1/2 lg:border-l border-borderLightGray pb-4">
            <div
                className="min-h-[37px] hidden items-center gap-2 border-b border-borderLightGray pl-2 pr-3 py-2 md:flex">
            </div>
            <div className="py-2 px-3">
                <p className="text-textLightGray text-sm"> // Code message: </p>
            </div>
            <div
                className="border border-borderLightGray rounded-lg bg-backgroundTerminal min-h-[56px] px-3 py-3 flex coding fix-font">
                <CodeBlock
                    className="whitespace-pre text-sm"
                    text={code_message}
                    language={'javascript'}
                    paragraph={'// Code message'}
                    showLineNumbers={true}
                    theme={dracula}
                />

            </div>
        </div>
    )

    const centralSection = (
        <>
            <div className="w-1/2">
                <div className="flex flex-col h-full">
                    <div className="hidden md:flex border-b border-borderLightGray w-full">
                        <div
                            className="min-h-[35px] flex items-center gap-2 pl-2 pr-3 py-2
                                           border-r border-borderLightGray cursor-pointer">
                            <p className="text-textLightGray text-sm"> contacts </p>
                            <div>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.34771 8.71879L13.0602 5.00629L14.1207 6.06679L10.4082 9.77929L14.1207
                                        13.4918L13.0602 14.5523L9.34771 10.8398L5.63521 14.5523L4.57471 13.4918L8.28721
                                        9.77929L4.57471 6.06679L5.63521 5.00629L9.34771 8.71879Z"
                                        fill="#607B96"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    {form_container}
                </div>
            </div>
            {message_container}
        </>
    )

    return (
        <>

            {/* Contact me */}
            <ColumnLayout
                folderSection={folderSection}
                centralSection={centralSection}
                id_central_section={'contacts_me_box'}
            />

        </>
    )
}

export default ContactMe