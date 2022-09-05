/* Core */
import React, {FC} from 'react';

const SvgComponent: React.FC<any> = ({name, handleClick, className}) => {

    const icon_path = require(`../../assets/images/icon/${name}.svg`)
    return (
        <img src={icon_path} alt={name} onClick={handleClick} className={className} />
    )
};

export default SvgComponent;