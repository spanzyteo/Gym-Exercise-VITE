export const exerciseOptions = {
  method: 'GET',
  params: { limit: '100' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
}

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
}

export const calculateOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '176fb98f1amsh63317c931e97b0ap1436c1jsn69703e8a0c14',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
  },
}
