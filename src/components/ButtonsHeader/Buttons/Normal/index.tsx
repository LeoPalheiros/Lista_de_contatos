import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../../../Redux/filter/slice'
import { RiContactsFill } from 'react-icons/ri'
import { Button, Counter } from '../../styles'
import * as enums from '../../../../utils/enums/status'
import type { RootReducer } from '../../../../Redux/store'

export type Props = {
  status: enums.status.ALL | enums.status.FAVORITE | enums.status.NORMAL
}

const BtnNormal = (status: Props) => {
  const { filterReducer, contactListReducer } = useSelector(
    (state: RootReducer) => state
  )

  const dispatch = useDispatch()

  const isActiveFilter = () => {
    const sameStatus = filterReducer.status === enums.status.NORMAL
    return sameStatus
  }

  const returnContactFilter = () => {
    if (filterReducer) {
      return contactListReducer.data.filter(
        contact => contact.favorite === enums.status.NORMAL
      ).length
    }
  }

  const NormalContacts = () => {
    dispatch(changeFilter(status))
  }

  const isActive = isActiveFilter()
  const counterContacts = returnContactFilter()

  return (
    <>
      <Button active={isActive} onClick={NormalContacts}>
        <RiContactsFill />
        Common <Counter active={isActive}>{counterContacts}</Counter>
      </Button>
    </>
  )
}

export default BtnNormal
