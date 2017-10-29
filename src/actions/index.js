import axios from 'axios'
import { WEATHERMAP_API_KEY } from '../config/keys'
import { FETCH_WEATHER } from './types'

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHERMAP_API_KEY}&units=metric`

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},br`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}