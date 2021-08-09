import jwt from 'jsonwebtoken'

export const jwtSign = ({ publicAddress }) => {
  return jwt.sign({ publicAddress }, 'secret_key')
}

export const jwtVerify = ({ token }) => {
  return jwt.verify(token, 'secret_key')
}
