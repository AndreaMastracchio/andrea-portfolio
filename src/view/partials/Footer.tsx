/* Core */
import React, {FC} from 'react';

/* Interface */
import {Props} from '../../interface/PropsInterface'

const Footer: FC<Props> = () => {

    return (
        <footer id="footer"
                className="hidden border-t border-borderLightGray min-h-[49.74px] md:block">
            <div className="flex items-center">
                <p className="text-textLightGray border-r border-borderLightGray py-3 px-3">find me in:</p>
            </div>
        </footer>
    )
}

export default Footer;