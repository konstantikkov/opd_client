import { css } from '@emotion/react'
import styled from '@emotion/styled'

const unknownStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const UnknownStyled = styled.div(unknownStyle)

const infoWrapperStyle = css`
  width: 100%;
  display: flex;
`

export const InfoWrapperStyled = styled.div(infoWrapperStyle)

const dataWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const DataWrapperStyled = styled.div(dataWrapperStyle)

const dataStyle = css`
  width: 100%;
  margin: 30px 0;
  border-top: #489d9d 10px solid;
`

export const DataStyled = styled.div(dataStyle)

const dataRowStyle = css`
  width: 100%;
  border-bottom: #489d9d 2px solid;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export const DataRowStyled = styled.div(dataRowStyle)

const dataHeadStyle = css`
  background-color: rgba(72, 157, 157, 0.5);
`

export const DataHeadStyled = styled.div(dataHeadStyle)

const dataTailStyle = ({ level }) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${level};
`

export const DataTailStyled = styled.div(dataTailStyle)
