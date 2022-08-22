/* Core */
import React, {FC} from 'react';

const SvgComponent: React.FC<any> = ({name}) => {

    const icon_path = require(`../../assets/images/icon/${name}.svg`)
    return (
        <img src={icon_path} alt={name}/>
    )
};

export default SvgComponent;