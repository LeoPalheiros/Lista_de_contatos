import { IoMdArrowRoundBack } from 'react-icons/io'
import { BtnLinkBack } from '../styles'

const BtnBack = () => {
  return (
    <>
      <BtnLinkBack to="/">
        <IoMdArrowRoundBack />
      </BtnLinkBack>
    </>
  )
}

export default BtnBack
