import ContainerButtons from './styles'
import BtnAdd from './Buttons/Links/Add'
import BtnAll from './Buttons/All'
import BtnFavorite from './Buttons/Favorites'
import * as enums from '../../utils/enums/status'
import BtnNormal from './Buttons/Normal'

const ButtonsHeader = () => {
  return (
    <ContainerButtons>
      <BtnAll status={enums.status.ALL} />
      <BtnNormal status={enums.status.NORMAL} />
      <BtnFavorite status={enums.status.FAVORITE} />
      <BtnAdd />
    </ContainerButtons>
  )
}

export default ButtonsHeader
