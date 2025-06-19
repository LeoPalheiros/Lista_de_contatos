import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variablesColors from '../../../../Styles/variables-colors'

const LinkBtn = styled(Link)`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid transparent;
  color: ${variablesColors.white};
  background-color: ${variablesColors.black2};
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  position: relative;

  &:hover {
    border-color: ${variablesColors.white};
    background-color: ${variablesColors.black};
  }

  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }

  @media (max-width: 1024px) {
    margin: 0 16px;
  }

  @media (max-width: 540px) {
    margin: 0 auto;
  }
`

export const BtnLinkBack = styled(LinkBtn)`
  @media (max-width: 540px) {
    margin: 0;
  }
`

export default LinkBtn
