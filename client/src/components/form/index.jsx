import React, { useState } from 'react'
import { AlertStyled, ButtonStyled, FormStyled, InputStyled } from './form.style'

export const Form = ({ defaultValue, field, handler, placeholder }) => {
    const [value, setValue] = useState(() => defaultValue)
    const [error, setError] = useState(() => false)
    console.log(value)
    const onSubmit = (event) => {
        event.preventDefault()
        if (value) {
            setError(false)
            return handler(value)
        }
        return setError(true)
    }

    return(
        <FormStyled onSubmit={onSubmit}>
            <InputStyled name={field} type="text" placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)} />
            <ButtonStyled type="submit">Выбрать</ButtonStyled>
            {error &&
                <AlertStyled>
                    Поле заполнено некорректно
                </AlertStyled>
            }
        </FormStyled>
    )
}
