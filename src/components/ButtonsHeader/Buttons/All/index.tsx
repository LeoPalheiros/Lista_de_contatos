import { FaUsers } from 'react-icons/fa6'
import { Button, Counter } from '../../styles'
import * as enums from '../../../../utils/enums/status'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../../../Redux/filter/slice'
import type { RootReducer } from '../../../../Redux/store'

export type Props = {
  status: enums.status.ALL | enums.status.FAVORITE | enums.status.NORMAL
}

const BtnAll = (status: Props) => {
  const dispatch = useDispatch()

  const { filterReducer, contactListReducer } = useSelector(
    (state: RootReducer) => state
  )

  const isActiveFilter = () => {
    const sameStatus = filterReducer.status === enums.status.ALL
    return sameStatus
  }

  const returnContactFilter = () => {
    if (filterReducer) return contactListReducer.data.length
  }

  const allContacts = () => {
    dispatch(changeFilter(status))
  }

  const isActive = isActiveFilter()
  const counterContacts = returnContactFilter()

  return (
    <>
      <Button active={isActive} onClick={allContacts}>
        <FaUsers />
        All <Counter active={isActive}>{counterContacts}</Counter>
      </Button>
    </>
  )
}

export default BtnAll
