/* Core */
import React, {useState} from 'react'
import {CodeBlock, dracula} from "react-code-blocks";
import emailjs from 'emailjs-com';
import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';

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

    const sendMessageForm = () => {
        const button = document?.getElementById('button-contact-me')
        const loader = document?.getElementById('button-loader')
        const p_message = document?.getElementById('button-message')
        const p_message_state = document?.getElementById('button-message-state')
        const success_message = document.createTextNode("Grazie per avermi contattato!");
        const error_message = document.createTextNode("OPS! Qualcosa é andato storto...Riprova!");
        const default_message = document.createTextNode('\'_submit_message\'')

        if (p_message && loader && button && p_message_state) {
            p_message.classList.add('hidden')
            loader.classList.remove('hidden')

            let message = {
                'name': nameValue,
                'email': emailValue,
                'message': messageValue
            }

            emailjs.send('service_e4fgrla', 'template_j9eemlj', message, '3rVDf_bruqWCLsgUp')
                .then((response) => {
                    loader.classList.add('hidden')
                    p_message_state.appendChild(success_message)
                    p_message_state.classList.remove('hidden')
                }, (error) => {
                    p_message.appendChild(error_message)
                    p_message.classList.remove('hidden')
                });
        }

    }

    const form_container = (
        <GoogleReCaptchaProvider reCaptchaKey="6LdHaNQhAAAAAPCoy3-G6b4LdbaWgV_PRe_Dylkk">
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
                    <button id="button-contact-me" onClick={sendMessageForm}
                            className="flex justify-center rounded-md items-center px-2 py-1 text-white bg-[#1C2B3A] mt-6">
                        <p id="button-message">_submit-message</p>
                        <p id="button-message-state" className="hidden"></p>
                        <div className="hidden" id="button-loader">
                            <svg aria-hidden="true"
                                 className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </button>
                    {/*<Recaptcha/>*/}
                </form>
            </div>
        </GoogleReCaptchaProvider>
    )

    let code_message =
        'const button =  document.querySelector(\'#button-contact-me\')\n' +
        'const message =  { \n' +
        'name: "' + nameValue + '"\n' +
        'email: "' + emailValue + '"\n' +
        'message: "' + messageValue + '"\n' +
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