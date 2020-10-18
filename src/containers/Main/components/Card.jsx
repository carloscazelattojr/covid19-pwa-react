import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardIU } from '../../../components'
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'


function Card({ value, label, color}){
    return(
        <CardIU>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardIU>
    )
}

export default memo(Card)

