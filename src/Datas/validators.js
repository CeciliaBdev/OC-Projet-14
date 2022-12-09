export function firstNameValidate(firstname) {
  const regex = /^[A-zÀ-ú-]{2,}$/

  if (regex.test(firstname) === false) {
    return 'Firstname incorrect'
  } else {
    return 'firstname correct'
  }
}
