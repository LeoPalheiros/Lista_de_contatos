import { RiUserStarFill } from 'react-icons/ri'
import { Button, Counter } from '../../styles'
import * as enums from '../../../../utils/enums/status'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../../../Redux/filter/slice'
import type { RootReducer } from '../../../../Redux/store'

export type Props = {
  status: enums.status.FAVORITE | enums.status.ALL | enums.status.NORMAL
}

const BtnFavorite = (status: Props) => {
  const dispatch = useDispatch()

  const { filterReducer, contactListReducer } = useSelector(
    (state: RootReducer) => state
  )

  const isActiveFilter = () => {
    const sameStatus = filterReducer.status === enums.status.FAVORITE
    return sameStatus
  }

  const returnContactFilter = () => {
    if (filterReducer) {
      return contactListReducer.data.filter(
        contact => contact.favorite === enums.status.FAVORITE
      ).length
    }
  }

  const allFavorites = () => {
    dispatch(changeFilter(status))
  }

  const isActive = isActiveFilter()
  const counterContacts = returnContactFilter()

  return (
    <>
      <Button active={isActive} onClick={allFavorites}>
        <RiUserStarFill />
        Favorites <Counter active={isActive}>{counterContacts}</Counter>
      </Button>
    </>
  )
}

export default BtnFavorite
