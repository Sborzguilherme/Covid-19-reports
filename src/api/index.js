const axios = require('axios')
const url = 'https://covid19.mathdro.id/api' // Have to be moved to env files

const fetchData = async () => {
  try {
    const { data: {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    } } = await axios.get(url)

    return { confirmed, recovered, deaths, lastUpdate }
  } catch (error) {
    console.log(error)
    throw error
  }
}

module.exports = {
  fetchData
}

