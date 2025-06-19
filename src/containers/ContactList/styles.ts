import styled from 'styled-components'

const ContainerContactList = styled.div`
  width: 50vw;
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  row-gap: 40px;
  margin: 0 auto;

  @media (max-width: 1366px) {
    width: 90vw;
  }

  @media (max-width: 1024px) {
    width: 80vw;
    grid-template-columns: 1fr;
  }
`

export default ContainerContactList
