import Form from '../../containers/Form/index'
import Header from '../../containers/Header'
import { Container } from '../../Styles/global'

const RegisterContact = () => {
  return (
    <Container>
      <Header showFilters={false} />
      <Form />
    </Container>
  )
}

export default RegisterContact
