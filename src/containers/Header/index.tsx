import ButtonsHeader from '../../components/ButtonsHeader'
import BtnLinkBack from '../../components/ButtonsHeader/Buttons/Links/Back'
import SearchContact from '../../components/SearchContact'
import ContainerHeader from './styles'

type Props = {
  showFilters: boolean
}

const Header = ({ showFilters }: Props) => {
  return (
    <ContainerHeader>
      {showFilters ? (
        <>
          <ButtonsHeader />
          <SearchContact />
        </>
      ) : (
        <BtnLinkBack />
      )}
    </ContainerHeader>
  )
}

export default Header
