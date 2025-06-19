import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import ContainerContactList from './styles'
import type { RootReducer } from '../../Redux/store'
import * as enums from '../../utils/enums/status'

const ContactList = () => {
  const { data } = useSelector((state: RootReducer) => state.contactListReducer)
  const { searchTerm, status } = useSelector(
    (state: RootReducer) => state.filterReducer
  )

  const filterContacts = () => {
    let filterFavorites = data

    if (searchTerm !== undefined) {
      filterFavorites = filterFavorites.filter(
        contact =>
          contact.name.toLowerCase().search(searchTerm.toLowerCase()) >= 0 ||
          contact.email.toLowerCase().search(searchTerm.toLowerCase()) >= 0
      )

      if (status === enums.status.FAVORITE) {
        filterFavorites = filterFavorites.filter(
          contact => contact.favorite === enums.status.FAVORITE
        )
      } else if (status === enums.status.NORMAL) {
        filterFavorites = filterFavorites.filter(
          contact => contact.favorite === enums.status.NORMAL
        )
      } else if (status !== enums.status.ALL) {
        filterFavorites = filterFavorites.filter(
          contact => contact.favorite !== enums.status.ALL
        )
      }
      return filterFavorites
    } else {
      return data
    }
  }

  return (
    <ContainerContactList>
      {filterContacts().map(contact => (
        <Contact
          key={contact.name}
          name={contact.name}
          email={contact.email}
          telephone={contact.telephone}
          favorite={contact.favorite}
          id={contact.id}
        />
      ))}
    </ContainerContactList>
  )
}

export default ContactList
