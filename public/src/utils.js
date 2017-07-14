export const possiblePassphraseChars = () => {
  const charCodes = []

  // 1-9
  for (let i = 48; i < 58; i++) {
    charCodes.push(i)
  }

  // A-Z
  for (let i = 65; i < 91; i++) {
    charCodes.push(i)
  }

  // a-z
  for (let i = 97; i < 123; i++) {
    charCodes.push(i)
  }

  return charCodes
}