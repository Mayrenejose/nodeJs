import express from 'express'
import toNewDiaryEntry from '../service/newDiary'
import * as diaryServices from '../service/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getSensitiveEntries())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary != null) ? res.send(diary) : res.sendStatus(400)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addEntries(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch {
    res.status(400).send('error')
  }
})

export default router
