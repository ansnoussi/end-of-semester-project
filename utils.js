const encode = (str) => {
  return Buffer.from(str).toString('base64')
}

const decode = (str) => {
  return Buffer.from(str, 'base64').toString('ascii')
}


module.exports = {encode, decode};