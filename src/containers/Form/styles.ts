import styled from 'styled-components'
import variablesColors from '../../Styles/variables-colors'

const ContainerForm = styled.div`
  width: 50vw;
  height: 100%;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  align-items: top;

  @media (max-width: 1024px) {
    width: 80vw;
  }
`

export const FormAddContact = styled.form`
  width: 100%;
  height: fit-content;
  justify-content: center;
  padding: 32px 64px;
  border: 1px solid ${variablesColors.lineColor};
  border-radius: 8px;
  background-color: ${variablesColors.black2};

  h2 {
    text-align: center;
  }

  button {
    display: flex;
    width: auto;
    justify-content: center;
    margin: 32px auto 0 auto;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }

  @media (max-width: 668px) {
    padding: 24px 40px;
  }

  @media (max-width: 440px) {
    padding: 24px 28px;
  }
`

export const FieldInput = styled.div`
  display: block;
  margin: 24px 0;

  input {
    width: 100%;
    font-size: 16px;
    padding: 8px 16px;
    margin: 8px 0;
    color: ${variablesColors.white};
    background-color: ${variablesColors.black3};
    border: 1px solid ${variablesColors.lineColor};
    border-radius: 8px;

    &:focus {
      background-color: ${variablesColors.black};
    }
  }
`
export const FieldRadio = styled.div`
  display: flex;
  padding: 0 16px;

  input {
    margin-right: 8px;
  }

  label {
    margin-right: 32px;
  }
`

export default ContainerForm
