import ethUtil from 'ethereumjs-util'

const verifySignature = ({ signature, publicAddress, nonce }) => {
  const message = `Signing Say-it nonce ${nonce}`

  const messageBuffer = Buffer.from(message)
  const messageHash = ethUtil.hashPersonalMessage(messageBuffer)
  const signatureBuffer = ethUtil.toBuffer(signature)
  const signatureParams = ethUtil.fromRpcSig(signatureBuffer)
  const publicKey = ethUtil.ecrecover(
    messageHash,
    signatureParams.v,
    signatureParams.r,
    signatureParams.s
  )
  const addressBuffer = ethUtil.publicToAddress(publicKey)
  const address = ethUtil.bufferToHex(addressBuffer)

  return address.toLowerCase() === publicAddress.toLowerCase()
}

export default verifySignature
