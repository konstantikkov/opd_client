import { css } from '@emotion/react'
import styled from '@emotion/styled'

const formStyle = css`
  display: flex;
  flex-flow: row wrap;
  width: 320px;
  align-items: center;
  justify-content: flex-end;
`

export const FormStyled = styled.form(formStyle)


const inputStyle = css`
  width: 200px;
  box-sizing: border-box;
  padding: 10px;
  margin-right: 20px;
  background-color: #225656;
  border-radius: 10px;
  border: #489d9d 1px solid;
  color: #FFFFFF;

  ::placeholder {
    color: #e8e8e8;
  }

  :hover {
    background-color: #489d9d;
  }

  :active {
    background-color: #6deaea;
    color: #000000;
  }
`

export const InputStyled = styled.input(inputStyle)

const buttonStyle = css`
  width: 100px;
  background-color: #225656;
  border-radius: 10px;
  padding: 10px;
  border: 0;
  color: #FFFFFF;
  :hover {
    background-color: #489d9d;
  }

  :active {
    background-color: #6deaea;
    color: #000000;
  }
`

export const ButtonStyled = styled.button(buttonStyle)


const alertStyle = css`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  height: 20px;
  border: 1px solid #e06464;
  background-color: #ffb0b0;
  color: #d95050;
  display: flex;
  align-items: center;
`

export const AlertStyled = styled.div(alertStyle)