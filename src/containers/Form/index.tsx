import { useDispatch } from 'react-redux'
import { type FormEvent, useState } from 'react'
import ContainerForm, { FieldInput, FieldRadio, FormAddContact } from './styles'
import * as enums from '../../utils/enums/status'
import { add } from '../../Redux/contactList/slice'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [status, setStatus] = useState(enums.status.NORMAL)

  const numberTelephone = Number(telephone)

  const addNewContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      add({
        name,
        email,
        telephone: numberTelephone,
        favorite: status,
      })
    )
    navigate('/')
  }

  return (
    <ContainerForm>
      <FormAddContact onSubmit={addNewContact}>
        <h2>Add new contact</h2>
        <FieldInput>
          <input
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Full name"
          />
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={telephone}
            onChange={event => setTelephone(event.target.value)}
            type="number"
            placeholder="Cell phone"
          />
        </FieldInput>
        <FieldRadio>
          <input
            value={enums.status.NORMAL}
            onChange={event => setStatus(event.target.value as enums.status)}
            id="normal"
            type="radio"
            checked={status === enums.status.NORMAL}
          />
          <label htmlFor="normal">Common</label>
          <input
            value={enums.status.FAVORITE}
            onChange={event =>
              setStatus(event.target.value as enums.status.FAVORITE)
            }
            id="favorite"
            type="radio"
            checked={status === enums.status.FAVORITE}
          />
          <label htmlFor="favorite">Favorite</label>
        </FieldRadio>
        <button type="submit">To add</button>
      </FormAddContact>
    </ContainerForm>
  )
}

export default Form
