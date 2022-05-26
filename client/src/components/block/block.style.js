import { css } from '@emotion/react'
import styled from '@emotion/styled'

const blockStyle = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 30px;
  border-radius: 30px;
  width: 100%;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 50px auto;
`

export const BlockStyled = styled.div(blockStyle)
