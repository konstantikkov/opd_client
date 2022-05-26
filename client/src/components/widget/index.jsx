import React from 'react'

import { Block } from '../block'
import { Form } from '../form'
import { InfoWrapper } from '../info-wrapper'

export const Widget = ({title, data, handler, placeholder}) => {
    return(
        <Block>
            <h2>{title}</h2>
            <Form defaultValue={''} field={'student'} handler={handler} placeholder={placeholder}/>
            <InfoWrapper title={title} error={data.error} data={data}/>
        </Block>
    )
}