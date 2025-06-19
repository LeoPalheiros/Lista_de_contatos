import { HiUserAdd } from 'react-icons/hi'
import LinkBtn from '../styles'

const BtnAdd = () => {
  return (
    <>
      <LinkBtn to="/add-contact">
        <HiUserAdd />
        To add
      </LinkBtn>
    </>
  )
}

export default BtnAdd
