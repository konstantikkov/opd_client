import React from 'react'
import { BlockStyled } from './block.style'

export const Block = ({ children }) => {
    return(
        <BlockStyled>{
            children
        }</BlockStyled>
    )
}