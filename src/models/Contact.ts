import * as enums from '../utils/enums/status'

class Contact {
  name: string
  email: string
  telephone: number
  favorite: enums.status
  id: number

  constructor(
    name: string,
    email: string,
    telephone: number,
    favorite: enums.status,
    id: number
  ) {
    this.name = name
    this.email = email
    this.telephone = telephone
    this.favorite = favorite
    this.id = id
  }
}

export default Contact
