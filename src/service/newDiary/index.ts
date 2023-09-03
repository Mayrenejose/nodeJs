import { NewDiaryEntry, Weather, Visibility } from '../../types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (params: any): boolean => {
  return Object.values(Weather).includes(params)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}
const parseComment = (commentRequest: any): string => {
  if (!isString(commentRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentRequest
}

const parseDate = (dateRequest: any): string => {
  if (!isString(dateRequest) || !isDate(dateRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateRequest
}

const parseWeathert = (weatherRequest: any): Weather => {
  if (!isString(weatherRequest) || !isWeather(weatherRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherRequest
}

const parseVisibility = (visibilityRequest: any): Visibility => {
  if (!isString(visibilityRequest) || !isVisibility(visibilityRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntri: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeathert(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntri
}

export default toNewDiaryEntry
