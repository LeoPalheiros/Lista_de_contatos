import ContactList from '../../containers/ContactList'
import Header from '../../containers/Header'
import { Container } from '../../Styles/global'

const Home = () => {
  return (
    <Container>
      <Header showFilters={true} />
      <ContactList />
    </Container>
  )
}

export default Home
