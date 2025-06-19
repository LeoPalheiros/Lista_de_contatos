import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

const ContainerHeader = styled.div`
  width: 100%;
  min-height: 114px;
  height: fit-content;
  position: sticky;
  top: 0;
  background-color: ${variablesColors.black2};
  border-bottom: 1px solid ${variablesColors.lineColor};
  display: flex;
  padding: 24px 40px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    height: fit-content;
    flex-direction: column-reverse;
    position: static;
  }
`

export default ContainerHeader
