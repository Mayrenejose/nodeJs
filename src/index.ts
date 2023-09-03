import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())
const PORT = 3000

app.get('/ying', (_, res) => {
  res.send('yang')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log('servidor andando')
})
