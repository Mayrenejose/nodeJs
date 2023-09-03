import { DiaryEntries, DiarySensitiveEntries, NewDiaryEntry } from '../../types'
import diariesData from '../diaries.json'

const diaries: DiaryEntries[] = diariesData as DiaryEntries[]

export const getEntries = (): DiaryEntries[] => diaries

export const getSensitiveEntries = (): DiarySensitiveEntries[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const findById = (id: number): DiarySensitiveEntries | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const addEntries = (newDiary: NewDiaryEntry): DiaryEntries => {
  const newDiaryEntry = {
    id: diaries.length + 1,
    ...newDiary
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
