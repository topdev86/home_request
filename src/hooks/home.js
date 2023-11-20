import axios from './axios'

export const insertData = async (param) => {
  try {
    await axios.post(
      'https://65590262e93ca47020a9fce8.mockapi.io/insert',
      param,
    )
    return true
  } catch (error) {
    return false
  }
}
