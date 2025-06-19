import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

type Props = {
  active: boolean
}

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 16px;
  }

  @media (max-width: 540px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 32px;
  }
`

export const Button = styled.button<Props>`
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
  border: 2px solid
    ${props => (props.active ? variablesColors.white : 'transparent')};
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

export const Counter = styled.span<Props>`
  position: absolute;
  top: -8px;
  left: -8px;
  padding: 4px 8px;
  border: 2px solid
    ${props => (props.active ? variablesColors.white : 'transparent')};
  border-radius: 50%;
  background-color: ${variablesColors.blueSky};
`

export default ContainerButtons
