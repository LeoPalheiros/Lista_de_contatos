import { useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md'
import { IoMdHeartEmpty } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import ContactData from '../../models/Contact'
import ContainerContact, {
  UserData,
  Data,
  Buttons,
  Button,
  BtnFavorite,
  BtnIsFavorite,
  DataInput,
} from './styles'
import * as enums from '../../utils/enums/status'
import {
  remove,
  edit,
  changeStatusFavorite,
  changeStatusNormal,
} from '../../Redux/contactList/slice'

type Props = ContactData

const Contact = ({
  name: defaultName,
  email: defaultEmail,
  telephone: defaultTelephone,
  favorite,
  id,
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEdiding] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState(0)

  useEffect(() => {
    if (defaultName.length > 0) {
      setName(defaultName)
    }
    if (defaultEmail.length > 0) {
      setEmail(defaultEmail)
    }
    if (defaultTelephone !== 0) {
      setTelephone(defaultTelephone)
    }
  }, [defaultName, defaultEmail, defaultTelephone])

  function cancelEdit() {
    setIsEdiding(false)
    setName(defaultName)
    setEmail(defaultEmail)
    setTelephone(defaultTelephone)
  }

  return (
    <ContainerContact>
      <Data>
        <DataInput active={isEditing}>
          <label htmlFor="name">Name:</label>
          <UserData
            active={isEditing}
            disabled={!isEditing}
            value={name}
            id="name"
            type="text"
            onChange={event => setName(event.target.value)}
          ></UserData>
        </DataInput>
        <DataInput active={isEditing}>
          <label htmlFor="email">E-mail:</label>
          <UserData
            active={isEditing}
            disabled={!isEditing}
            value={email}
            id="email"
            type="text"
            onChange={event => setEmail(event.target.value)}
          ></UserData>
        </DataInput>
        <DataInput active={isEditing}>
          <label htmlFor="telephone">Cell phone:</label>
          <UserData
            active={isEditing}
            disabled={!isEditing}
            value={telephone}
            id="telephone"
            type="numer"
            onChange={event =>
              setTelephone(event.target.value as unknown as number)
            }
          ></UserData>
        </DataInput>
      </Data>
      <Buttons>
        {favorite === enums.status.FAVORITE ? (
          <>
            <BtnIsFavorite
              onClick={() =>
                dispatch(
                  changeStatusNormal({
                    status: enums.status.NORMAL,
                    id,
                  })
                )
              }
            >
              <MdFavorite />
            </BtnIsFavorite>
          </>
        ) : (
          <>
            <BtnFavorite
              onClick={() =>
                dispatch(
                  changeStatusFavorite({
                    status: enums.status.FAVORITE,
                    id,
                  })
                )
              }
            >
              <IoMdHeartEmpty />
            </BtnFavorite>
          </>
        )}
        {isEditing ? (
          <>
            <Button
              onClick={() => {
                dispatch(
                  edit({
                    name,
                    email,
                    telephone,
                    favorite,
                    id,
                  })
                )
                setIsEdiding(false)
              }}
            >
              Save
            </Button>
            <Button onClick={cancelEdit}>Cancel</Button>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEdiding(true)}>Edit</Button>
            <Button onClick={() => dispatch(remove(id))}>Remove</Button>
          </>
        )}
      </Buttons>
    </ContainerContact>
  )
}

export default Contact
